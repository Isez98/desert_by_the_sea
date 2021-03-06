provider "aws" {
  region = "us-west-1"
}

variable "mysite" {
  description = "Name of the site to create infrastructure"
  type = string
  default = "www.desertbythesearentals.com"
}

# cloudfront viewer_certificate property MUST be in us-east-1
# Reference: https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer-certificate-arguments
provider "aws" {
  alias  = "region_east_1"
  region = "us-east-1"
}

data "aws_route53_zone" "hosted_zone" {
  name = "desertbythesearentals.com"
}

resource "aws_s3_bucket" "site" {
  bucket = var.mysite
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id

  policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.site.arn}/*"
    }
  ]
}
EOF
}

resource "aws_acm_certificate" "desertbythesearentals" {
  provider = aws.region_east_1 # certificate must be in east-1
  domain_name       = aws_s3_bucket.site.bucket # same as bucket name
  validation_method = "DNS"
}

resource "aws_route53_record" "hosted_zone" {
  zone_id = data.aws_route53_zone.hosted_zone.id
  name    = data.aws_route53_zone.hosted_zone.name
  type    = "A"

  alias {
    name                   = aws_s3_bucket.site.website_domain
    zone_id                = aws_s3_bucket.site.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "validation" {
  name    = aws_acm_certificate.desertbythesearentals.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.desertbythesearentals.domain_validation_options.0.resource_record_type
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  records = [aws_acm_certificate.desertbythesearentals.domain_validation_options.0.resource_record_value]
  ttl     = "60"
}

resource "aws_acm_certificate_validation" "desertbythesearentals" {
  provider = aws.region_east_1
  certificate_arn = aws_acm_certificate.desertbythesearentals.arn

  validation_record_fqdns = [
    aws_route53_record.validation.fqdn
  ]
}

