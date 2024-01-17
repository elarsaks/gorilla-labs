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
  ami               = "ami-0014ce3e52359afbd"
  instance_type     = "t3.micro"
  availability_zone = "eu-north-1a"
  security_groups   = [aws_security_group.gorilla_labs_sg.name]
  key_name          = "gorilla-labs-deployer-key"

  user_data = <<-EOF
    #!/bin/bash
    # Update system packages
    sudo apt-get update
    # Install unzip, Nginx, Node.js, and PostgreSQL
    sudo apt-get install -y unzip nginx
    curl -sL https://deb.nodesource.com/setup_current.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y postgresql postgresql-contrib

    # Create directories
    sudo mkdir -p /home/ubuntu/nginx
    sudo mkdir -p /home/ubuntu/nextjs

    # Setup Nginx configuration (Assuming you have a proper nginx.conf)
    # IMPORTANT: Update the path to your nginx.conf if it's different
    sudo cp /path/to/your/nginx.conf /home/ubuntu/nginx/nginx.conf
    sudo ln -s /home/ubuntu/nginx/nginx.conf /etc/nginx/sites-enabled/
    sudo systemctl restart nginx

    # Start and enable Nginx service
    sudo systemctl start nginx
    sudo systemctl enable nginx
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
# resource "aws_ebs_volume" "gorilla_labs_ebs" {
#   availability_zone = "eu-north-1a"
#   size              = 10

#   tags = {
#     Name           = "Gorilla Labs EBS"
#     "Gorilla Labs" = "true"
#   }
# }

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
