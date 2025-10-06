# Adding New Tools

To add a new tool to the cheat sheets application, follow these steps:

## 1. Create Tool Commands Data

Create a new file in `src/data/` for your tool's commands:

```typescript
// src/data/your-tool.ts
import { Command } from "@/types";

export const yourToolCommands: Command[] = [
  {
    command: "your-command",
    description: "Detailed description of what this command does. Include usage context and important flags or options.",
    example: "your-command --flag value",
    keywords: ["keyword1", "keyword2", "keyword3", "searchable", "terms"]
  },
  {
    command: "your-command --help",
    description: "Display help information for the command.",
    example: "your-command --help",
    keywords: ["help", "usage", "documentation"]
  }
  // Add more commands following the same pattern
];
```

### Command Object Properties:
- `command`: The actual command syntax
- `description`: Comprehensive explanation of what the command does
- `example`: Practical usage example (optional but recommended)
- `keywords`: Array of searchable terms for filtering

## 2. Update Tools Registry

Add your tool to the `tools` array in `src/data/tools.ts`:

```typescript
{
  name: "Your Tool",
  href: "/your-tool",
  description: "Brief description for the home page grid",
  content: "Longer description explaining what this tool does and why it's useful",
  keywords: ["tool", "category", "keywords", "for", "search"],
  title: "Your Tool Cheat Sheet",
  subtitle: "Essential commands for your tool"
}
```

### Tool Object Properties:
- `name`: Display name on the home page
- `href`: URL path (must match your page route)
- `description`: Short description for the tool card
- `content`: Longer description for SEO and context
- `keywords`: Search terms for home page filtering
- `title`: Page title for the tool's dedicated page
- `subtitle`: Subtitle for the tool's page header

## 3. Export Commands

Add your commands export to `src/data/index.ts`:

```typescript
export { yourToolCommands } from "./your-tool";
```

## 4. Update Dynamic Route

Add your commands to the `commandsMap` in `src/app/[tool]/page.tsx`:

```typescript
const commandsMap = {
  docker: dockerCommands,
  git: gitCommands,
  // ... existing tools
  "your-tool": yourToolCommands, // Add this line
};
```

Also import your commands at the top of the file:

```typescript
import { 
  dockerCommands, 
  gitCommands,
  // ... existing imports
  yourToolCommands // Add this import
} from "@/data";
```

## Best Practices

### Command Descriptions
- Be comprehensive but concise
- Include important flags and options
- Mention common use cases
- Explain what the command accomplishes

### Keywords
- Include command variations
- Add related terminology
- Consider what users might search for
- Include both technical and common terms

### Examples
- Use realistic, practical examples
- Show common flag combinations
- Demonstrate typical workflows
- Keep examples concise but complete

## File Structure

After adding a new tool, your project structure will include:

```
src/
├── data/
│   ├── your-tool.ts          # Your commands data
│   ├── tools.ts              # Updated with your tool
│   └── index.ts              # Updated exports
└── app/
    └── [tool]/
        └── page.tsx          # Updated with your tool mapping
```

## Automatic Features

Once added, your tool will automatically have:
- Search functionality on its dedicated page
- Copy-to-clipboard for all commands
- Responsive design
- Dark/light theme support
- SEO optimization
- Home page integration with filtering

That's it! Your new tool will appear on the home page and have its own searchable, interactive page.