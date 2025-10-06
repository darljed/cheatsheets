"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Command } from "@/types";

interface ToolPageProps {
  title: string;
  subtitle: string;
  commands: Command[];
}

export function ToolPage({ title, subtitle, commands }: ToolPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = commands.filter(cmd => 
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
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
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
          <Card key={index} className="min-w-0">
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
                <div className="bg-muted p-3 rounded-md overflow-x-auto">
                  <p className="text-sm font-mono whitespace-nowrap">{cmd.example}</p>
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