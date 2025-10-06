import { ToolPage } from "@/components/templates/tool-page";
import { jiraJqlCommands } from "@/data/jira-jql";

export default function JiraJqlPage() {
  return (
    <ToolPage
      title="Jira Query Language (JQL)"
      subtitle="Search and filter Jira issues with powerful query syntax"
      commands={jiraJqlCommands}
    />
  );
}