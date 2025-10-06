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

const gitCommands: Command[] = [
  {
    command: "git init",
    description: "Initialize a new Git repository in the current directory. Creates a .git folder with repository metadata.",
    example: "git init",
    keywords: ["initialize", "repository", "new", "create"]
  },
  {
    command: "git clone",
    description: "Clone a remote repository to your local machine. Downloads all files, branches, and commit history.",
    example: "git clone https://github.com/user/repo.git",
    keywords: ["clone", "download", "remote", "copy"]
  },
  {
    command: "git add",
    description: "Stage changes for commit. Use . to add all changes, or specify individual files. Prepares changes for the next commit.",
    example: "git add . && git add file.txt",
    keywords: ["stage", "add", "changes", "index"]
  },
  {
    command: "git commit",
    description: "Create a commit with staged changes. Use -m for inline message, -a to stage and commit all changes, --amend to modify last commit.",
    example: "git commit -m \"Add new feature\"",
    keywords: ["commit", "save", "message", "snapshot"]
  },
  {
    command: "git push",
    description: "Upload local commits to remote repository. Use -u to set upstream branch, --force to overwrite remote history.",
    example: "git push origin main",
    keywords: ["push", "upload", "remote", "publish"]
  },
  {
    command: "git pull",
    description: "Download and merge changes from remote repository. Combines git fetch and git merge in one command.",
    example: "git pull origin main",
    keywords: ["pull", "download", "merge", "sync"]
  },
  {
    command: "git status",
    description: "Show working directory status. Displays staged, unstaged, and untracked files. Essential for understanding current state.",
    example: "git status",
    keywords: ["status", "changes", "staged", "untracked"]
  },
  {
    command: "git log",
    description: "Display commit history. Use --oneline for compact view, --graph for visual branch structure, -n to limit results.",
    example: "git log --oneline --graph -10",
    keywords: ["log", "history", "commits", "graph"]
  },
  {
    command: "git branch",
    description: "List, create, or delete branches. Use -a to show all branches, -d to delete, -m to rename current branch.",
    example: "git branch feature-branch",
    keywords: ["branch", "create", "list", "delete"]
  },
  {
    command: "git checkout",
    description: "Switch branches or restore files. Use -b to create and switch to new branch, -- to restore specific files.",
    example: "git checkout -b new-feature",
    keywords: ["checkout", "switch", "branch", "restore"]
  },
  {
    command: "git merge",
    description: "Merge another branch into current branch. Creates merge commit unless fast-forward is possible.",
    example: "git merge feature-branch",
    keywords: ["merge", "combine", "branches", "integrate"]
  },
  {
    command: "git rebase",
    description: "Reapply commits on top of another branch. Use -i for interactive rebase to edit commit history.",
    example: "git rebase main",
    keywords: ["rebase", "replay", "history", "interactive"]
  },
  {
    command: "git stash",
    description: "Temporarily save uncommitted changes. Use pop to restore, list to view stashes, drop to delete.",
    example: "git stash && git stash pop",
    keywords: ["stash", "temporary", "save", "restore"]
  },
  {
    command: "git reset",
    description: "Reset current branch to specific commit. Use --soft to keep changes staged, --hard to discard all changes.",
    example: "git reset --hard HEAD~1",
    keywords: ["reset", "undo", "commit", "history"]
  },
  {
    command: "git diff",
    description: "Show differences between commits, branches, or working directory. Use --staged to see staged changes.",
    example: "git diff HEAD~1..HEAD",
    keywords: ["diff", "differences", "changes", "compare"]
  }
];

export default function GitPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = gitCommands.filter(cmd => 
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
        <h1 className="text-4xl font-bold mb-4">Git Cheat Sheet</h1>
        <p className="text-lg text-muted-foreground mb-6">Essential Git commands for version control</p>
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