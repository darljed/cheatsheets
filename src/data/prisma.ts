import { Command } from "@/types";

export const prismaCommands: Command[] = [
  {
    command: "npx prisma init",
    description: "Initialize a new Prisma project with schema file and .env",
    example: "npx prisma init",
    keywords: ["init", "initialize", "setup", "new", "project"]
  },
  {
    command: "npx prisma generate",
    description: "Generate Prisma Client based on your schema",
    example: "npx prisma generate",
    keywords: ["generate", "client", "types", "build"]
  },
  {
    command: "npx prisma db push",
    description: "Push schema changes to database without migrations",
    example: "npx prisma db push",
    keywords: ["push", "database", "sync", "prototype"]
  },
  {
    command: "npx prisma db pull",
    description: "Pull database schema into Prisma schema file",
    example: "npx prisma db pull",
    keywords: ["pull", "introspect", "reverse", "import"]
  },
  {
    command: "npx prisma migrate dev",
    description: "Create and apply migration in development",
    example: "npx prisma migrate dev --name add-user-table",
    keywords: ["migrate", "migration", "dev", "development"]
  },
  {
    command: "npx prisma migrate deploy",
    description: "Apply pending migrations in production",
    example: "npx prisma migrate deploy",
    keywords: ["migrate", "deploy", "production", "apply"]
  },
  {
    command: "npx prisma migrate reset",
    description: "Reset database and apply all migrations",
    example: "npx prisma migrate reset",
    keywords: ["reset", "migrate", "clean", "rebuild"]
  },
  {
    command: "npx prisma studio",
    description: "Open Prisma Studio database browser",
    example: "npx prisma studio",
    keywords: ["studio", "gui", "browser", "admin"]
  },
  {
    command: "npx prisma format",
    description: "Format Prisma schema file",
    example: "npx prisma format",
    keywords: ["format", "prettier", "style", "clean"]
  },
  {
    command: "npx prisma validate",
    description: "Validate Prisma schema file",
    example: "npx prisma validate",
    keywords: ["validate", "check", "syntax", "errors"]
  },
  {
    command: "npx prisma db seed",
    description: "Run database seeding script",
    example: "npx prisma db seed",
    keywords: ["seed", "data", "populate", "fixtures"]
  },
  {
    command: "npx prisma migrate status",
    description: "Check status of database migrations",
    example: "npx prisma migrate status",
    keywords: ["status", "migrate", "pending", "applied"]
  },
  {
    command: "npx prisma migrate resolve",
    description: "Resolve migration issues in production",
    example: "npx prisma migrate resolve --applied 20231001000000_init",
    keywords: ["resolve", "fix", "migration", "issues"]
  },
  {
    command: "npx prisma db execute",
    description: "Execute raw SQL against database",
    example: "npx prisma db execute --file ./script.sql",
    keywords: ["execute", "sql", "raw", "script"]
  }
];
