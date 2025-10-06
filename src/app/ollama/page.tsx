"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

interface Command {
  command: string;
  description: string;
  example?: string;
  keywords: string[];
}

const ollamaCommands: Command[] = [
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
  }
];

export default function OllamaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = ollamaCommands.filter(cmd => 
    cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Ollama Cheat Sheet</h1>
        <p className="text-lg text-muted-foreground mb-6">Essential Ollama commands for local AI model management</p>
      </div>
      
      <div className="mb-8">
        
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search commands, descriptions, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {searchTerm && (
          <p className="text-sm text-muted-foreground mt-2">
            Found {filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="grid gap-4">
        {filteredCommands.map((cmd, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <code className="text-lg font-mono bg-muted px-2 py-1 rounded">
                  {cmd.command}
                </code>
                <CopyButton text={cmd.example || cmd.command} />
              </CardTitle>
              <CardDescription className="mt-2">{cmd.description}</CardDescription>
            </CardHeader>
            {cmd.example && (
              <CardContent>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-mono">{cmd.example}</p>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-muted-foreground">
                    Keywords: {cmd.keywords.join(", ")}
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
      
      {filteredCommands.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No commands found matching &quot;{searchTerm}&quot;</p>
        </div>
      )}
    </div>
  );
}