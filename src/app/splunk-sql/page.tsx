import { ToolPage } from "@/components/templates/tool-page";
import { splunkCommands } from "@/data/splunk";

export default function SplunkSqlPage() {
  return (
    <ToolPage
      title="Splunk Commands"
      subtitle="Essential Splunk administration and management commands"
      commands={splunkCommands}
    />
  );
}