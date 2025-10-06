import { ToolPage } from "@/components/templates/tool-page";
import { gitCommands, tools } from "@/data";

const gitTool = tools.find(tool => tool.href === "/git")!;

export default function GitPage() {
  return (
    <ToolPage
      title={gitTool.title}
      subtitle={gitTool.subtitle}
      commands={gitCommands}
    />
  );
}