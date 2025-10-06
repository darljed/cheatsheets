import { Command } from "@/types";

export const jiraJqlCommands: Command[] = [
  {
    command: "project =",
    description: "Search issues in specific project",
    example: "project = \"PROJ\"",
    keywords: ["project", "filter", "scope"]
  },
  {
    command: "assignee =",
    description: "Find issues assigned to specific user",
    example: "assignee = currentUser()",
    keywords: ["assignee", "user", "assigned"]
  },
  {
    command: "status =",
    description: "Filter by issue status",
    example: "status = \"In Progress\"",
    keywords: ["status", "state", "workflow"]
  },
  {
    command: "priority =",
    description: "Filter by issue priority",
    example: "priority = High",
    keywords: ["priority", "importance", "urgent"]
  },
  {
    command: "type =",
    description: "Filter by issue type",
    example: "type = Bug",
    keywords: ["type", "kind", "category"]
  },
  {
    command: "created >=",
    description: "Find issues created after specific date",
    example: "created >= -1w",
    keywords: ["created", "date", "time", "recent"]
  },
  {
    command: "updated >=",
    description: "Find issues updated after specific date",
    example: "updated >= startOfDay()",
    keywords: ["updated", "modified", "changed"]
  },
  {
    command: "reporter =",
    description: "Find issues reported by specific user",
    example: "reporter = currentUser()",
    keywords: ["reporter", "creator", "author"]
  },
  {
    command: "text ~",
    description: "Search text in summary, description, and comments",
    example: "text ~ \"database error\"",
    keywords: ["text", "search", "contains", "description"]
  },
  {
    command: "summary ~",
    description: "Search text in issue summary",
    example: "summary ~ \"login\"",
    keywords: ["summary", "title", "subject"]
  },
  {
    command: "AND",
    description: "Combine conditions with logical AND",
    example: "project = PROJ AND status = Open",
    keywords: ["and", "logical", "combine", "intersection"]
  },
  {
    command: "OR",
    description: "Combine conditions with logical OR",
    example: "priority = High OR priority = Critical",
    keywords: ["or", "logical", "alternative", "union"]
  },
  {
    command: "ORDER BY",
    description: "Sort results by field",
    example: "ORDER BY created DESC",
    keywords: ["order", "sort", "arrange", "sequence"]
  },
  {
    command: "currentUser()",
    description: "Reference the currently logged-in user",
    example: "assignee = currentUser()",
    keywords: ["current", "user", "me", "self"]
  },
  {
    command: "startOfDay()",
    description: "Reference start of current day",
    example: "created >= startOfDay()",
    keywords: ["start", "day", "today", "beginning"]
  },
  {
    command: "fixVersion =",
    description: "Filter by target fix version for releases",
    example: "fixVersion = \"2.1.0\" AND status != Closed",
    keywords: ["fixversion", "release", "version", "target"]
  },
  {
    command: "component =",
    description: "Filter by project component or module",
    example: "component = \"Authentication\" AND priority >= High",
    keywords: ["component", "module", "area", "feature"]
  },
  {
    command: "labels =",
    description: "Filter by issue labels or tags",
    example: "labels = \"security\" OR labels = \"performance\"",
    keywords: ["labels", "tags", "categories", "classification"]
  },
  {
    command: "resolution =",
    description: "Filter by how issue was resolved",
    example: "resolution = Fixed AND resolved >= -1w",
    keywords: ["resolution", "fixed", "resolved", "outcome"]
  },
  {
    command: "worklogDate >=",
    description: "Find issues with work logged in specific timeframe",
    example: "worklogDate >= startOfWeek() AND worklogAuthor = currentUser()",
    keywords: ["worklog", "time", "logged", "effort"]
  },
  {
    command: "duedate <=",
    description: "Find issues due by specific date",
    example: "duedate <= endOfWeek() AND status != Done",
    keywords: ["duedate", "deadline", "schedule", "timeline"]
  },
  {
    command: "Sprint =",
    description: "Filter by Agile sprint (requires Agile plugin)",
    example: "Sprint = \"PROJ Sprint 15\" AND status = \"In Progress\"",
    keywords: ["sprint", "agile", "scrum", "iteration"]
  },
  {
    command: "originalEstimate >=",
    description: "Filter by original time estimate",
    example: "originalEstimate >= 4h AND status = \"To Do\"",
    keywords: ["estimate", "time", "effort", "planning"]
  },
  {
    command: "remainingEstimate <=",
    description: "Filter by remaining work estimate",
    example: "remainingEstimate <= 2h AND assignee = currentUser()",
    keywords: ["remaining", "estimate", "work", "left"]
  },
  {
    command: "issueFunction in",
    description: "Use advanced functions for complex queries",
    example: "issueFunction in linkedIssuesOf(\"project = PROJ\")",
    keywords: ["function", "advanced", "linked", "complex"]
  },
  {
    command: "cf[10001] ~",
    description: "Search custom fields by ID or name",
    example: "cf[10001] ~ \"urgent\" OR \"Customer Impact\" is not EMPTY",
    keywords: ["custom", "field", "cf", "specific"]
  }
];