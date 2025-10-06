import { notFound } from "next/navigation";
import { ToolPage } from "@/components/templates/tool-page";
import { tools } from "@/data/tools";
import { 
  dockerCommands, 
  gitCommands, 
  splunkCLICommands, 
  ollamaCommands, 
  splunkSplCommands, 
  jiraJqlCommands, 
  microsoftKqlCommands 
} from "@/data";

const commandsMap = {
  docker: dockerCommands,
  git: gitCommands,
  ollama: ollamaCommands,
  "splunk-spl": splunkSplCommands,
  "splunk-cli": splunkCLICommands,
  "jira-jql": jiraJqlCommands,
  "microsoft-kql": microsoftKqlCommands,
};

interface PageProps {
  params: { tool: string };
}

export default function ToolPageRoute({ params }: PageProps) {
  const { tool } = params;
  
  const toolData = tools.find(t => t.href === `/${tool}`);
  const commands = commandsMap[tool as keyof typeof commandsMap];
  
  if (!toolData || !commands) {
    notFound();
  }

  return (
    <ToolPage
      title={toolData.title}
      subtitle={toolData.subtitle}
      commands={commands}
    />
  );
}

export function generateStaticParams() {
  return tools.map(tool => ({
    tool: tool.href.slice(1), // Remove leading slash
  }));
}