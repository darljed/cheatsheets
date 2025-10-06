import { ToolPage } from "@/components/templates/tool-page";
import { splunkCommands, tools } from "@/data";

const splunkTool = tools.find(tool => tool.href === "/splunk")!;

export default function SplunkPage() {
  return (
    <ToolPage
      title={splunkTool.title}
      subtitle={splunkTool.subtitle}
      commands={splunkCommands}
    />
  );
}