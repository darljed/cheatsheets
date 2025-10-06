import { Command } from "@/types";

export const splunkCommands: Command[] = [
  {
    command: "splunk start",
    description: "Start Splunk services. Starts splunkd daemon and splunkweb interface. Use --accept-license to skip license prompt.",
    example: "splunk start --accept-license",
    keywords: ["start", "service", "daemon", "web", "license"]
  },
  {
    command: "splunk stop",
    description: "Stop all Splunk services gracefully. Stops both splunkd and splunkweb processes.",
    example: "splunk stop",
    keywords: ["stop", "shutdown", "service"]
  },
  {
    command: "splunk restart",
    description: "Restart Splunk services. Equivalent to stop followed by start. Useful after configuration changes.",
    example: "splunk restart",
    keywords: ["restart", "reload", "configuration"]
  },
  {
    command: "splunk status",
    description: "Check status of Splunk processes. Shows if splunkd and splunkweb are running.",
    example: "splunk status",
    keywords: ["status", "check", "running", "health"]
  },
  {
    command: "splunk add index",
    description: "Create a new index for data storage. Specify index name and optional parameters like maxDataSize.",
    example: "splunk add index myindex -maxDataSize 1000",
    keywords: ["index", "create", "storage", "data"]
  },
  {
    command: "splunk list index",
    description: "List all configured indexes. Shows index names, paths, and basic configuration.",
    example: "splunk list index",
    keywords: ["list", "index", "show", "configuration"]
  },
  {
    command: "splunk add monitor",
    description: "Monitor a file or directory for new data. Automatically indexes new content as it's written.",
    example: "splunk add monitor /var/log/apache2/ -index web_logs",
    keywords: ["monitor", "file", "directory", "watch", "tail"]
  },
  {
    command: "splunk list monitor",
    description: "List all monitored inputs. Shows files and directories being watched for changes.",
    example: "splunk list monitor",
    keywords: ["list", "monitor", "inputs", "watched"]
  },
  {
    command: "splunk add forward-server",
    description: "Configure forwarding to another Splunk instance. Set up universal forwarder or heavy forwarder.",
    example: "splunk add forward-server 192.168.1.100:9997",
    keywords: ["forward", "server", "forwarder", "remote"]
  },
  {
    command: "splunk search",
    description: "Execute search from command line. Use quotes for complex searches, specify time range with earliest/latest.",
    example: "splunk search 'index=main error' -earliest -1h",
    keywords: ["search", "query", "command", "time"]
  },
  {
    command: "splunk export",
    description: "Export search results to file. Supports various formats like CSV, JSON, XML.",
    example: "splunk export 'index=main' -output csv -filename results.csv",
    keywords: ["export", "results", "csv", "json", "file"]
  },
  {
    command: "splunk btool",
    description: "Configuration file validation and troubleshooting tool. Check syntax and view effective configuration.",
    example: "splunk btool inputs list --debug",
    keywords: ["btool", "configuration", "debug", "validate"]
  },
  {
    command: "splunk clean eventdata",
    description: "Remove all indexed data from specified index. Use with caution as this is irreversible.",
    example: "splunk clean eventdata -index test_index",
    keywords: ["clean", "delete", "data", "remove", "index"]
  },
  {
    command: "splunk enable boot-start",
    description: "Configure Splunk to start automatically at system boot. Sets up system service.",
    example: "splunk enable boot-start -user splunk",
    keywords: ["boot", "startup", "service", "automatic"]
  },
  {
    command: "splunk show config",
    description: "Display current configuration settings. Shows effective configuration from all .conf files.",
    example: "splunk show config inputs",
    keywords: ["config", "configuration", "show", "settings"]
  },
  {
    command: "splunk add user",
    description: "Create new user account with specified roles and capabilities.",
    example: "splunk add user john -password changeme -role user",
    keywords: ["user", "create", "account", "role", "security"]
  },
  {
    command: "splunk edit user",
    description: "Modify existing user properties like password, roles, or email.",
    example: "splunk edit user john -password newpass -email john@company.com",
    keywords: ["user", "edit", "modify", "password", "email"]
  },
  {
    command: "splunk remove user",
    description: "Delete user account from Splunk system.",
    example: "splunk remove user john",
    keywords: ["user", "remove", "delete", "account"]
  },
  {
    command: "splunk add role",
    description: "Create custom role with specific capabilities and index access.",
    example: "splunk add role analyst -capability search -srchIndexesAllowed main,security",
    keywords: ["role", "create", "capability", "access", "security"]
  },
  {
    command: "splunk reload deploy-server",
    description: "Reload deployment server configuration to push updates to clients.",
    example: "splunk reload deploy-server",
    keywords: ["deploy", "server", "reload", "configuration", "clients"]
  },
  {
    command: "splunk display app",
    description: "Show information about installed apps and their status.",
    example: "splunk display app -name search",
    keywords: ["app", "display", "information", "status"]
  },
  {
    command: "splunk install app",
    description: "Install Splunk app from file or Splunkbase.",
    example: "splunk install app /path/to/app.tar.gz -update 1",
    keywords: ["install", "app", "splunkbase", "update"]
  },
  {
    command: "splunk remove app",
    description: "Uninstall Splunk app and remove its files.",
    example: "splunk remove app myapp",
    keywords: ["remove", "app", "uninstall", "delete"]
  },
  {
    command: "splunk validate",
    description: "Validate configuration files for syntax errors.",
    example: "splunk validate inputs",
    keywords: ["validate", "configuration", "syntax", "errors"]
  },
  {
    command: "splunk diag",
    description: "Generate diagnostic bundle for troubleshooting support cases.",
    example: "splunk diag --collect=etc,log --days=7",
    keywords: ["diag", "diagnostic", "troubleshoot", "support"]
  },
  {
    command: "splunk migrate",
    description: "Migrate configuration and data between Splunk versions.",
    example: "splunk migrate input-csv /path/to/migration.csv",
    keywords: ["migrate", "upgrade", "configuration", "data"]
  }
];