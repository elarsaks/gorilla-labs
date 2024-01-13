provider "aws" {
  region = "eu-north-1"
}

resource "aws_security_group" "gorilla_labs_sg" {
  name        = "gorilla-labs-sg"
  description = "Security group for Gorilla Labs instance"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name           = "gorilla-labs-sg"
    "Gorilla Labs" = "true"
  }
}

resource "aws_instance" "gorilla_labs" {
  ami               = "ami-027ae750a83e2c590"
  instance_type     = "t3.micro"
  availability_zone = "eu-north-1a"
  security_groups   = [aws_security_group.gorilla_labs_sg.name]

  # ... (no changes in the instance configuration)

  tags = {
    Name           = "Gorilla Labs Instance"
    "Gorilla Labs" = "true"
  }
}

resource "aws_ebs_volume" "gorilla_labs_ebs" {
  availability_zone = "eu-north-1a"
  size              = 10

  tags = {
    Name           = "Gorilla Labs EBS"
    "Gorilla Labs" = "true"
  }
}

resource "aws_volume_attachment" "gorilla_labs_ebs_attachment" {
  device_name = "/dev/sdh"
  volume_id   = aws_ebs_volume.gorilla_labs_ebs.id
  instance_id = aws_instance.gorilla_labs.id
}

resource "aws_eip" "gorilla_labs_eip" {
  instance = aws_instance.gorilla_labs.id

  tags = {
    Name           = "Gorilla Labs EIP"
    "Gorilla Labs" = "true"
  }
}

resource "aws_route53_zone" "gorilla_labs" {
  name = "gorilla-labs.com"
}

resource "aws_route53_record" "gorilla_labs_record" {
  zone_id = aws_route53_zone.gorilla_labs.zone_id
  name    = "gorilla-labs.com"
  type    = "A"
  ttl     = "300"
  records = [aws_eip.gorilla_labs_eip.public_ip]
}
