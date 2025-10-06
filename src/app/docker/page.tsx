import { ToolPage } from "@/components/templates/tool-page";
import { dockerCommands, tools } from "@/data";

const dockerTool = tools.find(tool => tool.href === "/docker")!;

export default function DockerPage() {
  return (
    <ToolPage
      title={dockerTool.title}
      subtitle={dockerTool.subtitle}
      commands={dockerCommands}
    />
  );
}