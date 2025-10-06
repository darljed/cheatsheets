import { Command } from "@/types";

export const pulumiCommands: Command[] = [
  {
    command: "pulumi new",
    description: "Create a new Pulumi project from template. Choose from various cloud providers and languages.",
    example: "pulumi new aws-typescript",
    keywords: ["new", "create", "project", "template", "initialize"]
  },
  {
    command: "pulumi up",
    description: "Deploy infrastructure changes. Preview and apply changes to your cloud resources.",
    example: "pulumi up",
    keywords: ["up", "deploy", "apply", "changes", "infrastructure"]
  },
  {
    command: "pulumi preview",
    description: "Preview infrastructure changes without applying them. Shows what will be created, updated, or deleted.",
    example: "pulumi preview",
    keywords: ["preview", "plan", "changes", "dry-run", "diff"]
  },
  {
    command: "pulumi destroy",
    description: "Destroy all resources in the stack. Use --yes to skip confirmation prompt.",
    example: "pulumi destroy --yes",
    keywords: ["destroy", "delete", "remove", "resources", "cleanup"]
  },
  {
    command: "pulumi stack",
    description: "Manage stacks. List, create, select, or remove stacks for different environments.",
    example: "pulumi stack ls",
    keywords: ["stack", "environment", "list", "select", "manage"]
  },
  {
    command: "pulumi stack init",
    description: "Create a new stack for the current project. Stacks represent different deployment environments.",
    example: "pulumi stack init production",
    keywords: ["stack", "init", "create", "environment", "new"]
  },
  {
    command: "pulumi stack select",
    description: "Switch to a different stack. Changes the active deployment target.",
    example: "pulumi stack select staging",
    keywords: ["stack", "select", "switch", "environment", "target"]
  },
  {
    command: "pulumi config",
    description: "Manage configuration values for the current stack. Set secrets and environment-specific values.",
    example: "pulumi config set aws:region us-west-2",
    keywords: ["config", "configuration", "set", "values", "environment"]
  },
  {
    command: "pulumi config set --secret",
    description: "Set a secret configuration value. Encrypts sensitive data like passwords and API keys.",
    example: "pulumi config set --secret dbPassword mySecretPassword",
    keywords: ["config", "secret", "encrypt", "password", "sensitive"]
  },
  {
    command: "pulumi state",
    description: "Manage Pulumi state. Export, import, or delete resources from state.",
    example: "pulumi state delete 'aws:s3/bucket:my-bucket'",
    keywords: ["state", "manage", "export", "import", "delete"]
  },
  {
    command: "pulumi refresh",
    description: "Refresh the state by reading current resource state from cloud provider.",
    example: "pulumi refresh",
    keywords: ["refresh", "sync", "state", "current", "provider"]
  },
  {
    command: "pulumi import",
    description: "Import existing cloud resources into Pulumi management. Adopt existing infrastructure.",
    example: "pulumi import aws:s3/bucket:my-bucket existing-bucket-name",
    keywords: ["import", "existing", "resources", "adopt", "infrastructure"]
  },
  {
    command: "pulumi export",
    description: "Export the current stack's state to JSON. Useful for backup or migration.",
    example: "pulumi stack export --file backup.json",
    keywords: ["export", "backup", "state", "json", "migration"]
  },
  {
    command: "pulumi logs",
    description: "Show logs for the current stack. View deployment history and resource events.",
    example: "pulumi logs --follow",
    keywords: ["logs", "history", "events", "follow", "deployment"]
  },
  {
    command: "pulumi plugin",
    description: "Manage Pulumi plugins. Install, list, or remove provider plugins.",
    example: "pulumi plugin install resource aws v6.0.0",
    keywords: ["plugin", "provider", "install", "manage", "version"]
  },
  {
    command: "pulumi policy",
    description: "Manage policy packs for compliance and governance. Enforce organizational standards.",
    example: "pulumi policy enable my-policy-pack latest",
    keywords: ["policy", "compliance", "governance", "standards", "enforce"]
  },
  {
    command: "pulumi watch",
    description: "Automatically deploy changes when files are modified. Continuous deployment mode.",
    example: "pulumi watch",
    keywords: ["watch", "automatic", "continuous", "deployment", "files"]
  },
  {
    command: "pulumi cancel",
    description: "Cancel a currently running update operation. Stop in-progress deployment.",
    example: "pulumi cancel",
    keywords: ["cancel", "stop", "abort", "update", "deployment"]
  },
  {
    command: "pulumi whoami",
    description: "Display the current logged-in user. Shows Pulumi Cloud identity.",
    example: "pulumi whoami",
    keywords: ["whoami", "user", "identity", "logged", "cloud"]
  },
  {
    command: "pulumi login",
    description: "Log in to Pulumi Cloud or self-hosted backend. Authenticate for state management.",
    example: "pulumi login",
    keywords: ["login", "authenticate", "cloud", "backend", "state"]
  }
];