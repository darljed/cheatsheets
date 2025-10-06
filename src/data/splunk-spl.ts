import { Command } from "@/types";

export const splunkSplCommands: Command[] = [
  {
    command: "search",
    description: "Basic search command to find events matching criteria",
    example: "search index=main error",
    keywords: ["search", "find", "events", "basic"]
  },
  {
    command: "index=",
    description: "Specify which index to search",
    example: "index=web_logs status=404",
    keywords: ["index", "source", "data"]
  },
  {
    command: "| stats",
    description: "Calculate statistics and aggregate data",
    example: "| stats count by host",
    keywords: ["stats", "count", "aggregate", "statistics"]
  },
  {
    command: "| eval",
    description: "Create or modify fields using expressions",
    example: "| eval new_field=field1+field2",
    keywords: ["eval", "calculate", "field", "expression"]
  },
  {
    command: "| where",
    description: "Filter results based on conditions",
    example: "| where status_code>=400",
    keywords: ["where", "filter", "condition", "boolean"]
  },
  {
    command: "| table",
    description: "Display specific fields in tabular format",
    example: "| table _time, host, status",
    keywords: ["table", "display", "fields", "columns"]
  },
  {
    command: "| sort",
    description: "Sort results by specified fields",
    example: "| sort -_time",
    keywords: ["sort", "order", "ascending", "descending"]
  },
  {
    command: "| head",
    description: "Return first N results",
    example: "| head 10",
    keywords: ["head", "limit", "first", "top"]
  },
  {
    command: "| tail",
    description: "Return last N results",
    example: "| tail 5",
    keywords: ["tail", "limit", "last", "bottom"]
  },
  {
    command: "| dedup",
    description: "Remove duplicate events based on field values",
    example: "| dedup host",
    keywords: ["dedup", "unique", "duplicate", "distinct"]
  },
  {
    command: "| timechart",
    description: "Create time-based statistical charts",
    example: "| timechart span=1h count by status",
    keywords: ["timechart", "time", "chart", "visualization"]
  },
  {
    command: "| rex",
    description: "Extract fields using regular expressions",
    example: "| rex field=_raw \"(?<ip>\\d+\\.\\d+\\.\\d+\\.\\d+)\"",
    keywords: ["rex", "regex", "extract", "parse"]
  },
  {
    command: "| join",
    description: "Join results with another search",
    example: "| join host [search index=users]",
    keywords: ["join", "merge", "combine", "lookup"]
  },
  {
    command: "| lookup",
    description: "Enrich data using lookup tables",
    example: "| lookup user_info.csv user_id",
    keywords: ["lookup", "enrich", "table", "reference"]
  },
  {
    command: "earliest= latest=",
    description: "Specify time range for search",
    example: "earliest=-24h latest=now",
    keywords: ["time", "range", "earliest", "latest"]
  }
];