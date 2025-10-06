"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  {
    name: "Docker",
    href: "/docker",
    description: "Container management commands and examples",
    content: "Essential Docker commands for building, running, and managing containers.",
    keywords: ["container", "build", "run", "image", "compose"]
  },
  {
    name: "Git",
    href: "/git",
    description: "Version control commands and workflows",
    content: "Essential Git commands for version control, branching, and collaboration.",
    keywords: ["version", "control", "branch", "commit", "merge"]
  },
  {
    name: "Splunk CLI",
    href: "/splunk",
    description: "Splunk command-line interface commands",
    content: "Essential Splunk CLI commands for data indexing, searching, and management.",
    keywords: ["splunk", "search", "index", "log", "data"]
  },
  {
    name: "Ollama",
    href: "/ollama",
    description: "Local AI model management commands",
    content: "Essential Ollama commands for running and managing AI models locally.",
    keywords: ["ai", "model", "local", "llm", "machine learning"]
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Developer Cheat Sheets</h1>
        <p className="text-lg text-muted-foreground mb-6">Quick reference guides for your favorite tools</p>
        
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {searchTerm && (
          <p className="text-sm text-muted-foreground mt-2">
            Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Link key={tool.name} href={tool.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{tool.name}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tool.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      {filteredTools.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No tools found matching &quot;{searchTerm}&quot;</p>
        </div>
      )}
    </div>
  );
}
