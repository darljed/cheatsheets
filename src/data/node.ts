import { Command } from "@/types";

export const nodeCommands: Command[] = [
  {
    command: "node",
    description: "Execute a JavaScript file with Node.js runtime. Basic command to run Node.js applications.",
    example: "node app.js",
    keywords: ["execute", "run", "javascript", "file", "runtime"]
  },
  {
    command: "node -v",
    description: "Display the current Node.js version. Useful for checking installed version.",
    example: "node -v",
    keywords: ["version", "check", "current", "installed"]
  },
  {
    command: "node --version",
    description: "Display the current Node.js version. Alternative to -v flag.",
    example: "node --version",
    keywords: ["version", "check", "current", "installed"]
  },
  {
    command: "node -e",
    description: "Execute JavaScript code directly from command line. Useful for quick scripts and testing.",
    example: "node -e \"console.log('Hello World')\"",
    keywords: ["execute", "inline", "code", "script", "quick"]
  },
  {
    command: "node -p",
    description: "Execute and print result of JavaScript expression. Combines -e with automatic console.log.",
    example: "node -p \"Math.PI * 2\"",
    keywords: ["print", "execute", "expression", "result", "math"]
  },
  {
    command: "node --inspect",
    description: "Start Node.js with debugging enabled. Opens debugger on default port 9229.",
    example: "node --inspect app.js",
    keywords: ["debug", "inspect", "debugger", "port", "development"]
  },
  {
    command: "node --inspect-brk",
    description: "Start Node.js with debugging and break on first line. Useful for debugging startup issues.",
    example: "node --inspect-brk app.js",
    keywords: ["debug", "inspect", "break", "first", "line", "startup"]
  },
  {
    command: "node --watch",
    description: "Watch for file changes and restart automatically. Built-in file watching (Node.js 18+).",
    example: "node --watch app.js",
    keywords: ["watch", "restart", "automatic", "changes", "development"]
  },
  {
    command: "node --env-file",
    description: "Load environment variables from a file. Built-in .env file support (Node.js 20+).",
    example: "node --env-file=.env app.js",
    keywords: ["environment", "variables", "env", "file", "config"]
  },
  {
    command: "node --max-old-space-size",
    description: "Set maximum memory for V8 heap. Increase memory limit for large applications.",
    example: "node --max-old-space-size=4096 app.js",
    keywords: ["memory", "heap", "limit", "v8", "performance"]
  },
  {
    command: "node --trace-warnings",
    description: "Show stack traces for process warnings. Helpful for debugging deprecation warnings.",
    example: "node --trace-warnings app.js",
    keywords: ["trace", "warnings", "stack", "debug", "deprecation"]
  },
  {
    command: "node --experimental-modules",
    description: "Enable experimental ES modules support. For using import/export syntax.",
    example: "node --experimental-modules app.mjs",
    keywords: ["experimental", "modules", "es6", "import", "export"]
  },
  {
    command: "node --loader",
    description: "Specify custom module loader. For transforming modules during import.",
    example: "node --loader ./my-loader.js app.js",
    keywords: ["loader", "custom", "module", "transform", "import"]
  },
  {
    command: "node --cpu-prof",
    description: "Generate CPU profile for performance analysis. Creates .cpuprofile file.",
    example: "node --cpu-prof app.js",
    keywords: ["cpu", "profile", "performance", "analysis", "profiling"]
  },
  {
    command: "node --heap-prof",
    description: "Generate heap profile for memory analysis. Creates .heapprofile file.",
    example: "node --heap-prof app.js",
    keywords: ["heap", "profile", "memory", "analysis", "profiling"]
  },
  {
    command: "node --check",
    description: "Check JavaScript syntax without executing. Useful for syntax validation.",
    example: "node --check app.js",
    keywords: ["check", "syntax", "validate", "parse", "lint"]
  },
  {
    command: "node --print",
    description: "Execute script and print result. Similar to -p but for files.",
    example: "node --print script.js",
    keywords: ["print", "execute", "result", "output", "file"]
  },
  {
    command: "node --require",
    description: "Preload module before executing main script. Useful for setup or polyfills.",
    example: "node --require ./setup.js app.js",
    keywords: ["require", "preload", "module", "setup", "polyfill"]
  },
  {
    command: "node --title",
    description: "Set process title shown in process list. Useful for process identification.",
    example: "node --title=\"My App\" app.js",
    keywords: ["title", "process", "name", "identification", "ps"]
  },
  {
    command: "node --zero-fill-buffers",
    description: "Zero-fill new Buffer instances for security. Prevents memory leaks in buffers.",
    example: "node --zero-fill-buffers app.js",
    keywords: ["zero", "fill", "buffer", "security", "memory"]
  }
];