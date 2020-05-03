terraform {
  backend "s3" {
    encrypt = true
    bucket = "terraform-dbts"
    key    = "desert_by_the_sea.tfstate"
    region  = "us-west-1"
  }
}
