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

  ingress {
    description = "Custom HTTP on port 3000"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Custom HTTP on port 4000"
    from_port   = 4000
    to_port     = 4000
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
  ami               = "ami-0014ce3e52359afbd"
  instance_type     = "t3.micro"
  availability_zone = "eu-north-1a"
  security_groups   = [aws_security_group.gorilla_labs_sg.name]
  key_name          = "gorilla-labs-deployer-key"

  user_data = <<-EOF
    #!/bin/bash
    # Update system packages
    sudo apt-get update

    # Install Docker and Docker Compose
    sudo apt-get install -y docker.io
    sudo apt-get install -y docker-compose

    # Add docker to user group
    sudo usermod -aG docker ubuntu

    # Start and enable Docker service
    sudo systemctl start docker
    sudo systemctl enable docker

    # Create network in docker
    docker network create gorilla-labs-network
  EOF

  tags = {
    Name           = "Gorilla Labs Instance"
    "Gorilla Labs" = "true"
  }
}



resource "aws_eip" "gorilla_labs_eip" {
  instance = aws_instance.gorilla_labs.id

  tags = {
    Name           = "Gorilla Labs EIP"
    "Gorilla Labs" = "true"
  }

  lifecycle {
    prevent_destroy = true
  }
}

# TODO: Use extra non destroyable volume for the SQL
# TODO: Add here S3 buckets
# resource "aws_ebs_volume" "gorilla_labs_ebs" {
#   availability_zone = "eu-north-1a"
#   size              = 10

#   tags = {
#     Name           = "Gorilla Labs EBS"
#     "Gorilla Labs" = "true"
#   }
# }


# These are resources that exist but are not managed by Terraform
# resource "aws_volume_attachment" "gorilla_labs_ebs_attachment" {
#   device_name = "/dev/sdh"
#   volume_id   = aws_ebs_volume.gorilla_labs_ebs.id
#   instance_id = aws_instance.gorilla_labs.id
# }


# resource "aws_route53_zone" "gorilla_labs" {
#   name = "gorilla-labs.com"

#   lifecycle {
#     prevent_destroy = true
#   }
# }

# resource "aws_route53_record" "gorilla_labs_record" {
#   zone_id = aws_route53_zone.gorilla_labs.zone_id
#   name    = "gorilla-labs.com"
#   type    = "A"
#   ttl     = "300"
#   records = [aws_eip.gorilla_labs_eip.public_ip]

#   lifecycle {
#     prevent_destroy = true
#   }
# }

# resource "aws_route53_record" "www_gorilla_labs_record" {
#   zone_id = aws_route53_zone.gorilla_labs.zone_id
#   name    = "www.gorilla-labs.com"
#   type    = "A"
#   ttl     = "300"
#   records = [aws_eip.gorilla_labs_eip.public_ip]

#   lifecycle {
#     prevent_destroy = true
#   }
# }
