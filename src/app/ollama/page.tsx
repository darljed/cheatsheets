import { ToolPage } from "@/components/templates/tool-page";
import { ollamaCommands, tools } from "@/data";

const ollamaTool = tools.find(tool => tool.href === "/ollama")!;

export default function OllamaPage() {
  return (
    <ToolPage
      title={ollamaTool.title}
      subtitle={ollamaTool.subtitle}
      commands={ollamaCommands}
    />
  );
}