terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}


# 1. Create the IAM Role that can be assumed by the user
resource "aws_iam_role" "assume_role" {
  name = "example-assume-role"

  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : "${aws_iam_user.assume_user_first.arn}" # The user will assume this role
        },
        "Action" : "sts:AssumeRole"
      }
    ]
  })
}

# 2. Attach an IAM Policy to the Role (Example: S3 Read-only Access)
resource "aws_iam_policy" "assume_role_policy" {
  name        = "example-assume-role-policy"
  description = "Allow S3 read-only access for the assumed role"

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          "s3:ListBucket"
        ],
        "Resource" : "arn:aws:s3:::*"
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "ec2:DescribeInstances"
        ],
        "Resource" : "*"
      }
    ]
  })
}

# 3. Attach the policy to the role
resource "aws_iam_role_policy_attachment" "attach_policy" {
  role       = aws_iam_role.assume_role.name
  policy_arn = aws_iam_policy.assume_role_policy.arn
}

# 4. Create the IAM User who will assume the role
resource "aws_iam_user" "assume_user_first" {
  name = "example-assume-user-first"
}

# 4. Create the IAM User who will assume the role
resource "aws_iam_user" "assume_user_second" {
  name = "example-assume-user-second"
}

# 5. Attach a policy to the user allowing it to assume the role
resource "aws_iam_user_policy" "user_assume_role_policy" {
  name = "assume-role-policy"
  user = aws_iam_user.assume_user_first.name

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : "sts:AssumeRole",
        "Resource" : "${aws_iam_role.assume_role.arn}"
      }
    ]
  })
}
