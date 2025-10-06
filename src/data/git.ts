import { Command } from "@/types";

export const gitCommands: Command[] = [
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
  },
  {
    command: "git fetch",
    description: "Download objects and refs from remote repository without merging. Safe way to see what others have committed.",
    example: "git fetch origin",
    keywords: ["fetch", "download", "remote", "refs", "safe"]
  },
  {
    command: "git remote",
    description: "Manage remote repositories. Add, remove, or view remote connections to other repositories.",
    example: "git remote add upstream https://github.com/original/repo.git",
    keywords: ["remote", "upstream", "origin", "connection"]
  },
  {
    command: "git tag",
    description: "Create, list, or delete tags. Mark specific commits as releases or important milestones.",
    example: "git tag -a v1.0.0 -m 'Release version 1.0.0'",
    keywords: ["tag", "release", "version", "milestone"]
  },
  {
    command: "git cherry-pick",
    description: "Apply specific commits from another branch to current branch. Useful for hotfixes or selective merging.",
    example: "git cherry-pick abc123",
    keywords: ["cherry-pick", "selective", "hotfix", "commit"]
  },
  {
    command: "git revert",
    description: "Create new commit that undoes changes from previous commit. Safe way to undo without rewriting history.",
    example: "git revert HEAD",
    keywords: ["revert", "undo", "safe", "history"]
  },
  {
    command: "git clean",
    description: "Remove untracked files from working directory. Use -n for dry run, -f to force, -d for directories.",
    example: "git clean -fd",
    keywords: ["clean", "untracked", "remove", "directory"]
  },
  {
    command: "git config",
    description: "Set configuration options for Git. Configure user info, aliases, and behavior settings.",
    example: "git config --global user.email 'you@example.com'",
    keywords: ["config", "settings", "user", "global", "alias"]
  },
  {
    command: "git blame",
    description: "Show who last modified each line of a file. Useful for tracking down when bugs were introduced.",
    example: "git blame src/main.js",
    keywords: ["blame", "author", "history", "debug", "tracking"]
  },
  {
    command: "git bisect",
    description: "Binary search to find commit that introduced a bug. Efficiently narrow down problematic commits.",
    example: "git bisect start && git bisect bad && git bisect good v1.0",
    keywords: ["bisect", "binary", "search", "bug", "debug"]
  },
  {
    command: "git reflog",
    description: "Show reference logs of HEAD changes. Recover lost commits or see complete history of branch changes.",
    example: "git reflog",
    keywords: ["reflog", "recover", "lost", "commits", "history"]
  },
  {
    command: "git worktree",
    description: "Manage multiple working trees. Work on different branches simultaneously without switching.",
    example: "git worktree add ../feature-branch feature-branch",
    keywords: ["worktree", "multiple", "branches", "simultaneous"]
  }
];