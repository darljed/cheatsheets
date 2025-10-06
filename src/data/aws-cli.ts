import { Command } from "@/types";

export const awsCliCommands: Command[] = [
  {
    command: "aws configure",
    description: "Configure AWS CLI with credentials and default settings. Sets up access key, secret key, region, and output format.",
    example: "aws configure",
    keywords: ["configure", "credentials", "setup", "access", "key"]
  },
  {
    command: "aws configure list",
    description: "Display current AWS CLI configuration settings. Shows configured profiles and their settings.",
    example: "aws configure list",
    keywords: ["configure", "list", "settings", "profile", "current"]
  },
  {
    command: "aws sts get-caller-identity",
    description: "Get details about the current AWS identity. Shows user ID, account, and ARN.",
    example: "aws sts get-caller-identity",
    keywords: ["identity", "user", "account", "arn", "whoami"]
  },
  {
    command: "aws s3 ls",
    description: "List S3 buckets or objects. Use bucket name to list objects within a specific bucket.",
    example: "aws s3 ls s3://my-bucket/",
    keywords: ["s3", "list", "buckets", "objects", "storage"]
  },
  {
    command: "aws s3 cp",
    description: "Copy files to/from S3. Use --recursive for directories, --exclude/--include for filtering.",
    example: "aws s3 cp file.txt s3://my-bucket/",
    keywords: ["s3", "copy", "upload", "download", "files"]
  },
  {
    command: "aws s3 sync",
    description: "Synchronize directories with S3. Only transfers changed files, supports deletion with --delete.",
    example: "aws s3 sync ./local-folder s3://my-bucket/folder/",
    keywords: ["s3", "sync", "synchronize", "directory", "backup"]
  },
  {
    command: "aws ec2 describe-instances",
    description: "List EC2 instances with details. Use --filters to narrow results, --query for specific fields.",
    example: "aws ec2 describe-instances --filters 'Name=instance-state-name,Values=running'",
    keywords: ["ec2", "instances", "describe", "list", "running"]
  },
  {
    command: "aws ec2 start-instances",
    description: "Start stopped EC2 instances. Provide instance IDs to start specific instances.",
    example: "aws ec2 start-instances --instance-ids i-1234567890abcdef0",
    keywords: ["ec2", "start", "instances", "power", "on"]
  },
  {
    command: "aws ec2 stop-instances",
    description: "Stop running EC2 instances. Use --force for immediate shutdown without graceful stop.",
    example: "aws ec2 stop-instances --instance-ids i-1234567890abcdef0",
    keywords: ["ec2", "stop", "instances", "shutdown", "power"]
  },
  {
    command: "aws lambda list-functions",
    description: "List all Lambda functions in the region. Shows function names, runtime, and last modified date.",
    example: "aws lambda list-functions",
    keywords: ["lambda", "functions", "list", "serverless", "runtime"]
  },
  {
    command: "aws lambda invoke",
    description: "Invoke a Lambda function. Use --payload for input data, --log-type Tail to see logs.",
    example: "aws lambda invoke --function-name my-function --payload '{}' response.json",
    keywords: ["lambda", "invoke", "execute", "function", "payload"]
  },
  {
    command: "aws logs describe-log-groups",
    description: "List CloudWatch log groups. Use --log-group-name-prefix to filter by name prefix.",
    example: "aws logs describe-log-groups --log-group-name-prefix '/aws/lambda/'",
    keywords: ["logs", "cloudwatch", "groups", "describe", "list"]
  },
  {
    command: "aws logs tail",
    description: "Stream log events from CloudWatch Logs. Use --follow for continuous streaming.",
    example: "aws logs tail /aws/lambda/my-function --follow",
    keywords: ["logs", "tail", "stream", "follow", "cloudwatch"]
  },
  {
    command: "aws iam list-users",
    description: "List IAM users in the account. Shows usernames, creation date, and path.",
    example: "aws iam list-users",
    keywords: ["iam", "users", "list", "identity", "access"]
  },
  {
    command: "aws iam create-user",
    description: "Create a new IAM user. Use --path to organize users in groups.",
    example: "aws iam create-user --user-name new-user",
    keywords: ["iam", "create", "user", "identity", "new"]
  },
  {
    command: "aws cloudformation list-stacks",
    description: "List CloudFormation stacks. Use --stack-status-filter to filter by status.",
    example: "aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE",
    keywords: ["cloudformation", "stacks", "list", "infrastructure", "status"]
  },
  {
    command: "aws cloudformation deploy",
    description: "Deploy CloudFormation stack from template. Creates or updates stack with change sets.",
    example: "aws cloudformation deploy --template-file template.yaml --stack-name my-stack",
    keywords: ["cloudformation", "deploy", "stack", "template", "infrastructure"]
  },
  {
    command: "aws rds describe-db-instances",
    description: "List RDS database instances. Shows instance details, status, and endpoint information.",
    example: "aws rds describe-db-instances",
    keywords: ["rds", "database", "instances", "describe", "list"]
  },
  {
    command: "aws secretsmanager get-secret-value",
    description: "Retrieve secret value from AWS Secrets Manager. Use --secret-id to specify the secret.",
    example: "aws secretsmanager get-secret-value --secret-id my-secret",
    keywords: ["secrets", "manager", "get", "value", "retrieve"]
  },
  {
    command: "aws --profile",
    description: "Use specific AWS profile for command. Allows switching between different AWS accounts/roles.",
    example: "aws --profile production s3 ls",
    keywords: ["profile", "account", "switch", "credentials", "role"]
  }
];