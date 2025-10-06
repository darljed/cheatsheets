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
  },
  {
    command: "| fields",
    description: "Include or exclude specific fields from results",
    example: "| fields + _time, host, status | fields - _raw",
    keywords: ["fields", "include", "exclude", "select"]
  },
  {
    command: "| rename",
    description: "Rename fields for better readability or standardization",
    example: "| rename src_ip as \"Source IP\", dest_port as \"Destination Port\"",
    keywords: ["rename", "alias", "readability", "standardize"]
  },
  {
    command: "| fillnull",
    description: "Replace null values with specified value or string",
    example: "| fillnull value=\"Unknown\" user_agent",
    keywords: ["fillnull", "null", "replace", "default"]
  },
  {
    command: "| transaction",
    description: "Group events into transactions based on common fields",
    example: "| transaction sessionid maxspan=30m",
    keywords: ["transaction", "group", "session", "correlation"]
  },
  {
    command: "| bucket",
    description: "Group numeric or time values into discrete buckets",
    example: "| bucket _time span=1h | stats count by _time",
    keywords: ["bucket", "group", "discrete", "histogram"]
  },
  {
    command: "| eventstats",
    description: "Add statistical information to each event without grouping",
    example: "| eventstats avg(response_time) as avg_response by host",
    keywords: ["eventstats", "statistics", "augment", "enrich"]
  },
  {
    command: "| streamstats",
    description: "Calculate running statistics across events in time order",
    example: "| streamstats count as event_number, avg(cpu_usage) as running_avg",
    keywords: ["streamstats", "running", "cumulative", "time"]
  },
  {
    command: "| multisearch",
    description: "Run multiple searches simultaneously and combine results",
    example: "| multisearch [search index=web] [search index=app]",
    keywords: ["multisearch", "multiple", "parallel", "combine"]
  },
  {
    command: "| append",
    description: "Add results from another search to current results",
    example: "| append [search index=backup earliest=-1d@d latest=@d]",
    keywords: ["append", "add", "combine", "union"]
  },
  {
    command: "| map",
    description: "Apply search to each result and return combined results",
    example: "| map search=\"search index=logs host=$host$ error\"",
    keywords: ["map", "iterate", "apply", "dynamic"]
  },
  {
    command: "| convert",
    description: "Convert field values to different formats or data types",
    example: "| convert ctime(_time) as readable_time, dur2sec(duration) as seconds",
    keywords: ["convert", "format", "datatype", "transform"]
  }
];