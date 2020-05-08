resource "aws_cloudfront_distribution" "desertbythesearentals" {
  enabled = true
  origin {
    domain_name = aws_s3_bucket.site.bucket_domain_name
    origin_id   = "from_s3_${aws_s3_bucket.site.bucket_domain_name}"
  }

  default_root_object = "index.html"
  is_ipv6_enabled     = true
  http_version = "http2"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id   = "from_s3_${aws_s3_bucket.site.bucket_domain_name}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = [
    aws_s3_bucket.site.bucket
  ]

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.desertbythesearentals.certificate_arn
    minimum_protocol_version = "TLSv1.1_2016"
    ssl_support_method       = "sni-only"
  }

  custom_error_response {
    error_code            = "404"
    error_caching_min_ttl = "86400"
    response_code         = "200"
    response_page_path    = "/error.html"
  }

  custom_error_response {
    error_code            = "403"
    error_caching_min_ttl = "86400"
    response_code         = "200"
    response_page_path    = "/error.html"
  }
}
