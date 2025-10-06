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
  },
  {
    command: "parse",
    description: "Extract structured data from unstructured text using patterns",
    example: "Syslog | parse Message with * \"user=\" user:string \" \" *",
    keywords: ["parse", "extract", "pattern", "structured"]
  },
  {
    command: "split",
    description: "Split string into array based on delimiter",
    example: "SecurityEvent | extend IPs = split(SrcIP, '.')",
    keywords: ["split", "array", "delimiter", "string"]
  },
  {
    command: "mv-expand",
    description: "Expand multi-value fields into separate rows",
    example: "Event | mv-expand Tags | where Tags == \"critical\"",
    keywords: ["mv-expand", "multivalue", "expand", "array"]
  },
  {
    command: "make-series",
    description: "Create time series data with regular intervals",
    example: "Perf | make-series avg(CounterValue) on TimeGenerated step 5m",
    keywords: ["make-series", "timeseries", "intervals", "regular"]
  },
  {
    command: "evaluate",
    description: "Use advanced analytics functions and plugins",
    example: "SecurityEvent | evaluate bag_unpack(AdditionalInfo)",
    keywords: ["evaluate", "analytics", "functions", "plugins"]
  },
  {
    command: "materialize",
    description: "Cache subquery results for better performance",
    example: "let cached = materialize(SecurityEvent | where TimeGenerated > ago(1h));",
    keywords: ["materialize", "cache", "performance", "subquery"]
  },
  {
    command: "range",
    description: "Generate sequence of values for testing or calculations",
    example: "range x from 1 to 10 step 1 | extend y = x * 2",
    keywords: ["range", "sequence", "generate", "testing"]
  },
  {
    command: "datatable",
    description: "Create inline table with static data",
    example: "datatable(Name:string, Age:int) [\"John\", 25, \"Jane\", 30]",
    keywords: ["datatable", "inline", "static", "create"]
  },
  {
    command: "toscalar",
    description: "Convert single-value result to scalar for use in expressions",
    example: "let threshold = toscalar(Perf | summarize avg(CounterValue));",
    keywords: ["toscalar", "scalar", "convert", "single"]
  },
  {
    command: "prev",
    description: "Access previous row value in ordered results",
    example: "Perf | sort by TimeGenerated | extend PrevValue = prev(CounterValue)",
    keywords: ["prev", "previous", "row", "ordered"]
  },
  {
    command: "row_cumsum",
    description: "Calculate cumulative sum over ordered rows",
    example: "Sales | sort by Date | extend RunningTotal = row_cumsum(Amount)",
    keywords: ["row_cumsum", "cumulative", "sum", "running"]
  }
];