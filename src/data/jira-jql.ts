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
  }
];