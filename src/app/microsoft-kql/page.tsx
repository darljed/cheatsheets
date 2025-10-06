import { ToolPage } from "@/components/templates/tool-page";
import { microsoftKqlCommands } from "@/data/microsoft-kql";

export default function MicrosoftKqlPage() {
  return (
    <ToolPage
      title="Microsoft KQL (Kusto Query Language)"
      subtitle="Query and analyze data in Azure Monitor, Azure Sentinel, and other Microsoft services"
      commands={microsoftKqlCommands}
    />
  );
}