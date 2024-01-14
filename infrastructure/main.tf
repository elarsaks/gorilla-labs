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

  user_data = <<-EOF
                #!/bin/bash
                # Update system packages
                sudo apt-get update
                # Install Nginx, Node.js, and PostgreSQL
                sudo apt-get install -y nginx
                curl -sL https://deb.nodesource.com/setup_current.x | sudo -E bash -
                sudo apt-get install -y nodejs
                sudo apt-get install -y postgresql postgresql-contrib
                # Start and enable Nginx service
                sudo systemctl start nginx
                sudo systemctl enable nginx
                # Create a simple html file to serve
                echo '<!DOCTYPE html>
                <html>
                <head>
                <title>Welcome to Gorilla Labs!</title>
                <style>
                html { color-scheme: light dark; }
                body { width: 35em; margin: 0 auto;
                font-family: Tahoma, Verdana, Arial, sans-serif; }
                </style>
                </head>
                <body>
                <h1>Welcome to Gorilla Labs!</h1>
                <p>If you see this page, the Nginx web server is successfully installed and working on AWS EC2 instance. Further configuration is required.</p>
                <p>For online documentation and support please refer to
                <a href="http://nginx.org/">nginx.org</a>.<br/>
                Commercial support is available at
                <a href="http://nginx.com/">nginx.com</a>.</p>
                <p><em>Thank you for using nginx.</em></p>
                </body>
                </html>' | sudo tee /var/www/html/index.html
                # Restart Nginx to load the new configuration
                sudo systemctl restart nginx
                EOF


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
