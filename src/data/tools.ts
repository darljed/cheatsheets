import { Tool } from "@/types";

export const tools: Tool[] = [
  {
    name: "Docker",
    href: "/docker",
    description: "Container management commands and examples",
    content: "Essential Docker commands for building, running, and managing containers.",
    keywords: ["container", "build", "run", "image", "compose"],
    title: "Docker Cheat Sheet",
    subtitle: "Essential Docker commands for container management"
  },
  {
    name: "Git",
    href: "/git",
    description: "Version control commands and workflows",
    content: "Essential Git commands for version control, branching, and collaboration.",
    keywords: ["version", "control", "branch", "commit", "merge"],
    title: "Git Cheat Sheet",
    subtitle: "Essential Git commands for version control"
  },
  {
    name: "Splunk CLI",
    href: "/splunk-cli",
    description: "Splunk command-line interface commands",
    content: "Essential Splunk CLI commands for data indexing, searching, and management.",
    keywords: ["splunk", "search", "index", "log", "data"],
    title: "Splunk CLI Cheat Sheet",
    subtitle: "Essential Splunk command-line interface commands"
  },
  {
    name: "Ollama",
    href: "/ollama",
    description: "Local AI model management commands",
    content: "Essential Ollama commands for running and managing AI models locally.",
    keywords: ["ai", "model", "local", "llm", "machine learning"],
    title: "Ollama Cheat Sheet",
    subtitle: "Essential Ollama commands for local AI model management"
  },
  {
    name: "Splunk SPL",
    href: "/splunk-spl",
    description: "Splunk Search Processing Language queries",
    content: "Essential SPL commands for searching and analyzing data in Splunk.",
    keywords: ["spl", "search", "query", "analytics", "logs"],
    title: "Splunk SPL Cheat Sheet",
    subtitle: "Essential Search Processing Language commands"
  },
  {
    name: "Jira JQL",
    href: "/jira-jql",
    description: "Jira Query Language for issue searching",
    content: "Essential JQL queries for finding and filtering Jira issues.",
    keywords: ["jql", "jira", "query", "issues", "search"],
    title: "Jira JQL Cheat Sheet",
    subtitle: "Essential Jira Query Language commands"
  },
  {
    name: "Microsoft KQL",
    href: "/microsoft-kql",
    description: "Kusto Query Language for Azure data analysis",
    content: "Essential KQL queries for analyzing data in Azure Monitor, Sentinel, and Log Analytics.",
    keywords: ["kql", "kusto", "azure", "analytics", "monitoring"],
    title: "Microsoft KQL Cheat Sheet",
    subtitle: "Essential Kusto Query Language commands"
  }
];