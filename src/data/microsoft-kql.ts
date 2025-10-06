import { Command } from "@/types";

export const microsoftKqlCommands: Command[] = [
  {
    command: "where",
    description: "Filter rows based on conditions",
    example: "SecurityEvent | where EventID == 4624",
    keywords: ["where", "filter", "condition", "boolean"]
  },
  {
    command: "project",
    description: "Select specific columns to display",
    example: "SecurityEvent | project TimeGenerated, Account, Computer",
    keywords: ["project", "select", "columns", "fields"]
  },
  {
    command: "summarize",
    description: "Aggregate data and calculate statistics",
    example: "SecurityEvent | summarize count() by Account",
    keywords: ["summarize", "aggregate", "count", "group"]
  },
  {
    command: "take",
    description: "Return first N rows",
    example: "SecurityEvent | take 10",
    keywords: ["take", "limit", "first", "top"]
  },
  {
    command: "sort",
    description: "Sort results by specified columns",
    example: "SecurityEvent | sort by TimeGenerated desc",
    keywords: ["sort", "order", "ascending", "descending"]
  },
  {
    command: "extend",
    description: "Add calculated columns to results",
    example: "SecurityEvent | extend Hour = datetime_part('hour', TimeGenerated)",
    keywords: ["extend", "calculate", "add", "column"]
  },
  {
    command: "join",
    description: "Combine data from multiple tables",
    example: "SecurityEvent | join (Heartbeat) on Computer",
    keywords: ["join", "combine", "merge", "relate"]
  },
  {
    command: "union",
    description: "Combine rows from multiple tables",
    example: "union SecurityEvent, Syslog",
    keywords: ["union", "combine", "merge", "append"]
  },
  {
    command: "distinct",
    description: "Return unique values",
    example: "SecurityEvent | distinct Computer",
    keywords: ["distinct", "unique", "deduplicate"]
  },
  {
    command: "count",
    description: "Count number of rows",
    example: "SecurityEvent | count",
    keywords: ["count", "total", "number", "rows"]
  },
  {
    command: "ago()",
    description: "Reference time relative to now",
    example: "SecurityEvent | where TimeGenerated > ago(1h)",
    keywords: ["ago", "time", "relative", "past"]
  },
  {
    command: "contains",
    description: "Check if string contains substring",
    example: "SecurityEvent | where Account contains \"admin\"",
    keywords: ["contains", "substring", "search", "text"]
  },
  {
    command: "startswith",
    description: "Check if string starts with prefix",
    example: "SecurityEvent | where Computer startswith \"WEB\"",
    keywords: ["startswith", "prefix", "begins", "starts"]
  },
  {
    command: "render",
    description: "Visualize results as charts",
    example: "SecurityEvent | summarize count() by bin(TimeGenerated, 1h) | render timechart",
    keywords: ["render", "chart", "visualize", "graph"]
  },
  {
    command: "bin()",
    description: "Group values into time or numeric bins",
    example: "SecurityEvent | summarize count() by bin(TimeGenerated, 1h)",
    keywords: ["bin", "group", "bucket", "interval"]
  }
];