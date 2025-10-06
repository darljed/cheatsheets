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

const dockerCommands: Command[] = [
  {
    command: "docker run",
    description: "Create and start a new container from an image. Use -d for detached mode, -p for port mapping, -v for volume mounting, --name to assign a name, and -e for environment variables.",
    example: "docker run -d -p 80:80 --name my-nginx nginx",
    keywords: ["create", "start", "container", "detached", "port", "volume", "environment"]
  },
  {
    command: "docker build",
    description: "Build a Docker image from a Dockerfile. Use -t to tag the image, -f to specify a different Dockerfile, and --no-cache to build without using cache.",
    example: "docker build -t myapp:latest .",
    keywords: ["build", "image", "dockerfile", "tag", "cache"]
  },
  {
    command: "docker ps",
    description: "List containers. Shows running containers by default. Use -a to show all containers (including stopped), -q for quiet mode (only IDs), and --filter to filter results.",
    example: "docker ps -a --filter status=exited",
    keywords: ["list", "containers", "running", "stopped", "filter", "status"]
  },
  {
    command: "docker images",
    description: "List all Docker images on the local system. Use -a to show all images including intermediate ones, -q for quiet mode, and --filter to filter results.",
    example: "docker images --filter dangling=true",
    keywords: ["list", "images", "local", "dangling", "filter"]
  },
  {
    command: "docker stop",
    description: "Stop one or more running containers gracefully. Docker sends SIGTERM first, then SIGKILL after grace period. Use -t to specify timeout.",
    example: "docker stop my-container another-container",
    keywords: ["stop", "graceful", "sigterm", "sigkill", "timeout"]
  },
  {
    command: "docker rm",
    description: "Remove one or more containers. Container must be stopped first unless using -f flag. Use -v to remove associated volumes.",
    example: "docker rm -f my-container",
    keywords: ["remove", "delete", "container", "force", "volume"]
  },
  {
    command: "docker rmi",
    description: "Remove one or more images from local storage. Use -f to force removal even if containers are using the image.",
    example: "docker rmi -f image_id",
    keywords: ["remove", "delete", "image", "force", "local"]
  },
  {
    command: "docker exec",
    description: "Execute a command inside a running container. Use -it for interactive terminal, -d for detached mode, -u to specify user, and -w for working directory.",
    example: "docker exec -it my-container /bin/bash",
    keywords: ["execute", "command", "interactive", "terminal", "bash", "shell"]
  },
  {
    command: "docker logs",
    description: "Fetch and display logs from a container. Use -f to follow log output, --tail to show last N lines, --since for time filtering, and -t for timestamps.",
    example: "docker logs -f --tail 100 my-container",
    keywords: ["logs", "output", "follow", "tail", "timestamp", "debug"]
  },
  {
    command: "docker pull",
    description: "Download an image from a Docker registry (Docker Hub by default). Specify tag after colon, defaults to 'latest' if no tag specified.",
    example: "docker pull ubuntu:20.04",
    keywords: ["download", "pull", "registry", "hub", "tag", "latest"]
  },
  {
    command: "docker push",
    description: "Upload an image to a Docker registry. Image must be tagged with registry URL. Requires authentication for private registries.",
    example: "docker push myregistry.com/myapp:v1.0",
    keywords: ["upload", "push", "registry", "tag", "authentication"]
  },
  {
    command: "docker network ls",
    description: "List all Docker networks. Shows bridge, host, and none networks by default, plus any custom networks created.",
    example: "docker network ls",
    keywords: ["network", "list", "bridge", "host", "custom"]
  },
  {
    command: "docker volume ls",
    description: "List all Docker volumes. Volumes persist data beyond container lifecycle and can be shared between containers.",
    example: "docker volume ls",
    keywords: ["volume", "list", "persist", "data", "shared"]
  },
  {
    command: "docker inspect",
    description: "Display detailed information about Docker objects (containers, images, volumes, networks). Returns JSON formatted data.",
    example: "docker inspect my-container",
    keywords: ["inspect", "details", "information", "json", "metadata"]
  },
  {
    command: "docker-compose up",
    description: "Create and start containers defined in docker-compose.yml. Use -d for detached mode, --build to rebuild images, and --scale to scale services.",
    example: "docker-compose up -d --build",
    keywords: ["compose", "multi-container", "yaml", "orchestration", "scale"]
  }
];

export default function DockerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = dockerCommands.filter(cmd => 
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
        <h1 className="text-4xl font-bold mb-4">Docker Cheat Sheet</h1>
        <p className="text-lg text-muted-foreground mb-6">Essential Docker commands for container management</p>
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