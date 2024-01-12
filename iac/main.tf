provider "aws" {
  region = "eu-north-1"
}

resource "aws_instance" "terraform-demo" {
  ami           = "ami-027ae750a83e2c590"
  instance_type = "t3.micro"
}
