# Adding New Tools

To add a new tool to the cheat sheets application, follow these minimal steps:

## 1. Add Tool Data

Create a new file in `src/data/` for your tool's commands:

```typescript
// src/data/your-tool.ts
import { Command } from "@/types";

export const yourToolCommands: Command[] = [
  {
    command: "your-command",
    description: "Description of what this command does",
    example: "your-command --example",
    keywords: ["keyword1", "keyword2", "keyword3"]
  },
  // Add more commands...
];
```

## 2. Update Tools List

Add your tool to `src/data/tools.ts`:

```typescript
{
  name: "Your Tool",
  href: "/your-tool",
  description: "Brief description for the home page",
  content: "Longer description of what this tool does",
  keywords: ["tool", "keywords", "for", "search"],
  title: "Your Tool Cheat Sheet",
  subtitle: "Essential commands for your tool"
}
```

## 3. Export Your Data

Add your commands export to `src/data/index.ts`:

```typescript
export { yourToolCommands } from "./your-tool";
```

## 4. Create the Page

Create `src/app/your-tool/page.tsx`:

```typescript
import { ToolPage } from "@/components/templates/tool-page";
import { yourToolCommands, tools } from "@/data";

const yourTool = tools.find(tool => tool.href === "/your-tool")!;

export default function YourToolPage() {
  return (
    <ToolPage
      title={yourTool.title}
      subtitle={yourTool.subtitle}
      commands={yourToolCommands}
    />
  );
}
```

That's it! Your new tool will automatically appear on the home page and have its own dedicated page with search functionality.