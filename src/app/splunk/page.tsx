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

const splunkCommands: Command[] = [
  {
    command: "splunk start",
    description: "Start Splunk services. Starts splunkd daemon and splunkweb interface. Use --accept-license to skip license prompt.",
    example: "splunk start --accept-license",
    keywords: ["start", "service", "daemon", "web", "license"]
  },
  {
    command: "splunk stop",
    description: "Stop all Splunk services gracefully. Stops both splunkd and splunkweb processes.",
    example: "splunk stop",
    keywords: ["stop", "shutdown", "service"]
  },
  {
    command: "splunk restart",
    description: "Restart Splunk services. Equivalent to stop followed by start. Useful after configuration changes.",
    example: "splunk restart",
    keywords: ["restart", "reload", "configuration"]
  },
  {
    command: "splunk status",
    description: "Check status of Splunk processes. Shows if splunkd and splunkweb are running.",
    example: "splunk status",
    keywords: ["status", "check", "running", "health"]
  },
  {
    command: "splunk add index",
    description: "Create a new index for data storage. Specify index name and optional parameters like maxDataSize.",
    example: "splunk add index myindex -maxDataSize 1000",
    keywords: ["index", "create", "storage", "data"]
  },
  {
    command: "splunk list index",
    description: "List all configured indexes. Shows index names, paths, and basic configuration.",
    example: "splunk list index",
    keywords: ["list", "index", "show", "configuration"]
  },
  {
    command: "splunk add monitor",
    description: "Monitor a file or directory for new data. Automatically indexes new content as it's written.",
    example: "splunk add monitor /var/log/apache2/ -index web_logs",
    keywords: ["monitor", "file", "directory", "watch", "tail"]
  },
  {
    command: "splunk list monitor",
    description: "List all monitored inputs. Shows files and directories being watched for changes.",
    example: "splunk list monitor",
    keywords: ["list", "monitor", "inputs", "watched"]
  },
  {
    command: "splunk add forward-server",
    description: "Configure forwarding to another Splunk instance. Set up universal forwarder or heavy forwarder.",
    example: "splunk add forward-server 192.168.1.100:9997",
    keywords: ["forward", "server", "forwarder", "remote"]
  },
  {
    command: "splunk search",
    description: "Execute search from command line. Use quotes for complex searches, specify time range with earliest/latest.",
    example: "splunk search 'index=main error' -earliest -1h",
    keywords: ["search", "query", "command", "time"]
  },
  {
    command: "splunk export",
    description: "Export search results to file. Supports various formats like CSV, JSON, XML.",
    example: "splunk export 'index=main' -output csv -filename results.csv",
    keywords: ["export", "results", "csv", "json", "file"]
  },
  {
    command: "splunk btool",
    description: "Configuration file validation and troubleshooting tool. Check syntax and view effective configuration.",
    example: "splunk btool inputs list --debug",
    keywords: ["btool", "configuration", "debug", "validate"]
  },
  {
    command: "splunk clean eventdata",
    description: "Remove all indexed data from specified index. Use with caution as this is irreversible.",
    example: "splunk clean eventdata -index test_index",
    keywords: ["clean", "delete", "data", "remove", "index"]
  },
  {
    command: "splunk enable boot-start",
    description: "Configure Splunk to start automatically at system boot. Sets up system service.",
    example: "splunk enable boot-start -user splunk",
    keywords: ["boot", "startup", "service", "automatic"]
  },
  {
    command: "splunk show config",
    description: "Display current configuration settings. Shows effective configuration from all .conf files.",
    example: "splunk show config inputs",
    keywords: ["config", "configuration", "show", "settings"]
  }
];

export default function SplunkPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = splunkCommands.filter(cmd => 
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
        <h1 className="text-4xl font-bold mb-4">Splunk CLI Cheat Sheet</h1>
        <p className="text-lg text-muted-foreground mb-6">Essential Splunk command-line interface commands</p>
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
          <p className="text-muted-foreground">No commands found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}