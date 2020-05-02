provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" "site" {
  bucket = "www.desertbythesearentals.com"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "holi.html"
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
  domain_name       = aws_s3_bucket.site.bucket # same as bucket name
  validation_method = "DNS"
}

