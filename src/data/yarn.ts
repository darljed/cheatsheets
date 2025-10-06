import { Command } from "@/types";

export const yarnCommands: Command[] = [
  {
    command: "yarn init",
    description: "Initialize a new package.json file. Use -y to accept all defaults quickly.",
    example: "yarn init -y",
    keywords: ["initialize", "package", "json", "project", "setup"]
  },
  {
    command: "yarn install",
    description: "Install all dependencies from package.json. Creates yarn.lock file for consistent installs.",
    example: "yarn install",
    keywords: ["install", "dependencies", "modules", "packages", "lock"]
  },
  {
    command: "yarn add",
    description: "Add a package to dependencies. Use --dev for development dependencies, --global for global installation.",
    example: "yarn add express --dev",
    keywords: ["add", "install", "package", "dependency", "dev"]
  },
  {
    command: "yarn remove",
    description: "Remove a package from dependencies. Automatically updates package.json and yarn.lock.",
    example: "yarn remove lodash",
    keywords: ["remove", "uninstall", "package", "dependency"]
  },
  {
    command: "yarn upgrade",
    description: "Upgrade packages to their latest versions. Use --latest to ignore semver constraints.",
    example: "yarn upgrade --latest",
    keywords: ["upgrade", "update", "latest", "version"]
  },
  {
    command: "yarn run",
    description: "Execute scripts defined in package.json. List available scripts with yarn run without arguments.",
    example: "yarn run build",
    keywords: ["run", "script", "execute", "build", "start"]
  },
  {
    command: "yarn start",
    description: "Run the start script defined in package.json. Shorthand for yarn run start.",
    example: "yarn start",
    keywords: ["start", "run", "server", "application"]
  },
  {
    command: "yarn test",
    description: "Run the test script defined in package.json. Shorthand for yarn run test.",
    example: "yarn test",
    keywords: ["test", "testing", "run", "spec"]
  },
  {
    command: "yarn list",
    description: "Display installed packages in tree format. Use --depth=0 for top-level only.",
    example: "yarn list --depth=0",
    keywords: ["list", "installed", "packages", "tree", "dependencies"]
  },
  {
    command: "yarn outdated",
    description: "Check for outdated packages. Shows current and latest versions with color coding.",
    example: "yarn outdated",
    keywords: ["outdated", "check", "versions", "update"]
  },
  {
    command: "yarn audit",
    description: "Scan for security vulnerabilities in dependencies. Use --fix to automatically resolve issues.",
    example: "yarn audit --fix",
    keywords: ["audit", "security", "vulnerabilities", "fix"]
  },
  {
    command: "yarn publish",
    description: "Publish package to npm registry. Requires authentication and proper package.json configuration.",
    example: "yarn publish",
    keywords: ["publish", "registry", "package", "release"]
  },
  {
    command: "yarn version",
    description: "Bump package version. Use --patch, --minor, or --major for semantic versioning.",
    example: "yarn version --patch",
    keywords: ["version", "bump", "semver", "patch", "minor", "major"]
  },
  {
    command: "yarn cache",
    description: "Manage yarn cache. Use clean to clear cache, dir to show cache directory.",
    example: "yarn cache clean",
    keywords: ["cache", "clean", "clear", "directory"]
  },
  {
    command: "yarn config",
    description: "Manage yarn configuration. Set registry, proxy, or other yarn settings.",
    example: "yarn config set registry https://registry.npmjs.org/",
    keywords: ["config", "configuration", "registry", "settings"]
  },
  {
    command: "yarn link",
    description: "Create symbolic link for local development. Link packages for testing before publishing.",
    example: "yarn link",
    keywords: ["link", "symbolic", "local", "development", "testing"]
  },
  {
    command: "yarn info",
    description: "Display detailed information about a package. Shows versions, dependencies, and metadata.",
    example: "yarn info express",
    keywords: ["info", "information", "package", "details", "metadata"]
  },
  {
    command: "yarn why",
    description: "Explain why a package is installed. Shows dependency tree and reasons for installation.",
    example: "yarn why lodash",
    keywords: ["why", "explain", "dependency", "tree", "reason"]
  },
  {
    command: "yarn workspaces",
    description: "Manage monorepo workspaces. Run commands across multiple packages in a workspace.",
    example: "yarn workspaces run build",
    keywords: ["workspaces", "monorepo", "multiple", "packages"]
  },
  {
    command: "yarn dlx",
    description: "Download and execute a package without installing it globally. Similar to npx.",
    example: "yarn dlx create-react-app my-app",
    keywords: ["dlx", "execute", "download", "temporary", "npx"]
  }
];