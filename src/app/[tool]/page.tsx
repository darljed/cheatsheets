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
  microsoftKqlCommands,
  npmCommands,
  yarnCommands,
  nodeCommands
} from "@/data";

const commandsMap = {
  docker: dockerCommands,
  git: gitCommands,
  ollama: ollamaCommands,
  "splunk-spl": splunkSplCommands,
  "splunk-cli": splunkCLICommands,
  "jira-jql": jiraJqlCommands,
  "microsoft-kql": microsoftKqlCommands,
  npm: npmCommands,
  yarn: yarnCommands,
  node: nodeCommands,
};

interface PageProps {
  params: Promise<{ tool: string }>;
}

export default async function ToolPageRoute({ params }: PageProps) {
  const { tool } = await params;
  
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