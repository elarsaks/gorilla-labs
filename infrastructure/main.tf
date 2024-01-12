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
    Name = "gorilla-labs-sg"
  }
}

resource "aws_instance" "gorilla_labs" {
  ami               = "ami-027ae750a83e2c590"
  instance_type     = "t3.micro"
  availability_zone = "eu-north-1a"
  security_groups   = [aws_security_group.gorilla_labs_sg.name]

  user_data = <<-EOF
               #!/bin/bash
              sudo yum update -y
              sudo amazon-linux-extras install docker
              sudo service docker start
              sudo systemctl enable docker
              sudo usermod -a -G docker ec2-user
              EOF
  tags = {
    Name = "Gorilla Labs"
  }
}

resource "aws_ebs_volume" "gorilla_labs_ebs" {
  availability_zone = "eu-north-1a"
  size              = 10 # TODO: Size in GB

  tags = {
    Name = "Gorilla Labs EBS"
  }
}

resource "aws_volume_attachment" "gorilla_labs_ebs_attachment" {
  device_name = "/dev/sdh"
  volume_id   = aws_ebs_volume.gorilla_labs_ebs.id
  instance_id = aws_instance.gorilla_labs.id
}
