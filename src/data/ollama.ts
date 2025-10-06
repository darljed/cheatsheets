import { Command } from "@/types";

export const ollamaCommands: Command[] = [
  {
    command: "ollama run",
    description: "Run a model interactively. Downloads the model if not already present. Start chatting with the AI model directly.",
    example: "ollama run llama2",
    keywords: ["run", "chat", "interactive", "model", "download"]
  },
  {
    command: "ollama pull",
    description: "Download a model without running it. Useful for pre-downloading models or updating to latest version.",
    example: "ollama pull codellama:13b",
    keywords: ["pull", "download", "model", "update"]
  },
  {
    command: "ollama list",
    description: "List all locally installed models. Shows model names, sizes, and modification dates.",
    example: "ollama list",
    keywords: ["list", "models", "installed", "local"]
  },
  {
    command: "ollama show",
    description: "Display detailed information about a model. Shows model parameters, template, and system message.",
    example: "ollama show llama2",
    keywords: ["show", "info", "details", "parameters"]
  },
  {
    command: "ollama rm",
    description: "Remove a model from local storage. Frees up disk space by deleting the model files.",
    example: "ollama rm llama2:7b",
    keywords: ["remove", "delete", "model", "cleanup"]
  },
  {
    command: "ollama cp",
    description: "Copy a model to create a new model with different name. Useful for creating model variants.",
    example: "ollama cp llama2 my-llama2",
    keywords: ["copy", "duplicate", "model", "variant"]
  },
  {
    command: "ollama create",
    description: "Create a new model from a Modelfile. Define custom models with specific parameters and system prompts.",
    example: "ollama create mymodel -f ./Modelfile",
    keywords: ["create", "custom", "modelfile", "build"]
  },
  {
    command: "ollama push",
    description: "Upload a model to Ollama registry. Share your custom models with others.",
    example: "ollama push myusername/mymodel",
    keywords: ["push", "upload", "share", "registry"]
  },
  {
    command: "ollama serve",
    description: "Start Ollama server daemon. Required for API access and running models as a service.",
    example: "ollama serve",
    keywords: ["serve", "server", "daemon", "api", "service"]
  },
  {
    command: "ollama ps",
    description: "List currently running models and their resource usage. Shows memory consumption and processing status.",
    example: "ollama ps",
    keywords: ["ps", "running", "status", "memory", "resources"]
  },
  {
    command: "ollama stop",
    description: "Stop a running model to free up memory. Model will need to be loaded again for next use.",
    example: "ollama stop llama2",
    keywords: ["stop", "unload", "memory", "free"]
  },
  {
    command: "curl API",
    description: "Make API requests to Ollama server. Send prompts and receive responses programmatically via REST API.",
    example: "curl -X POST http://localhost:11434/api/generate -d '{\"model\":\"llama2\",\"prompt\":\"Hello\"}'",
    keywords: ["api", "curl", "rest", "generate", "programmatic"]
  },
  {
    command: "ollama --version",
    description: "Display Ollama version information. Useful for troubleshooting and compatibility checks.",
    example: "ollama --version",
    keywords: ["version", "info", "troubleshoot"]
  },
  {
    command: "ollama help",
    description: "Show help information for Ollama commands. Get detailed usage instructions for any command.",
    example: "ollama help run",
    keywords: ["help", "usage", "instructions", "documentation"]
  },
  {
    command: "ollama run --verbose",
    description: "Run model with verbose output. See detailed information about model loading and token generation.",
    example: "ollama run --verbose llama2",
    keywords: ["verbose", "debug", "detailed", "tokens"]
  },
  {
    command: "ollama run --format json",
    description: "Get structured JSON responses from model. Useful for programmatic integration and parsing.",
    example: "ollama run llama2 --format json 'Explain JSON in one sentence'",
    keywords: ["json", "structured", "format", "programmatic"]
  },
  {
    command: "ollama run --system",
    description: "Set system message for model behavior. Define role and context for consistent responses.",
    example: "ollama run llama2 --system 'You are a helpful coding assistant'",
    keywords: ["system", "role", "context", "behavior"]
  },
  {
    command: "ollama run --template",
    description: "Use custom prompt template. Override default model template for specific use cases.",
    example: "ollama run llama2 --template '{{.System}}\n{{.Prompt}}'",
    keywords: ["template", "prompt", "custom", "format"]
  },
  {
    command: "ollama run --keepalive",
    description: "Control how long model stays loaded in memory. Optimize memory usage vs response time.",
    example: "ollama run --keepalive 5m llama2",
    keywords: ["keepalive", "memory", "optimization", "timeout"]
  },
  {
    command: "ollama run --nowordwrap",
    description: "Disable word wrapping in output. Useful for code generation or structured output.",
    example: "ollama run --nowordwrap codellama 'Generate a Python function'",
    keywords: ["nowordwrap", "code", "structured", "formatting"]
  },
  {
    command: "OLLAMA_HOST",
    description: "Set custom Ollama server host. Connect to remote Ollama instance or change default port.",
    example: "OLLAMA_HOST=192.168.1.100:11434 ollama list",
    keywords: ["host", "remote", "server", "port", "environment"]
  },
  {
    command: "OLLAMA_MODELS",
    description: "Set custom models directory. Change where Ollama stores downloaded models.",
    example: "OLLAMA_MODELS=/custom/path ollama pull llama2",
    keywords: ["models", "directory", "storage", "path", "custom"]
  },
  {
    command: "ollama run --multiline",
    description: "Enable multiline input mode. Send multiple lines of text before model processes input.",
    example: "ollama run --multiline llama2",
    keywords: ["multiline", "input", "multiple", "lines"]
  }
];