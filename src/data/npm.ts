import { Command } from "@/types";

export const npmCommands: Command[] = [
  {
    command: "npm init",
    description: "Initialize a new package.json file. Use -y to accept all defaults quickly.",
    example: "npm init -y",
    keywords: ["initialize", "package", "json", "project", "setup"]
  },
  {
    command: "npm install",
    description: "Install all dependencies listed in package.json. Creates node_modules folder and package-lock.json.",
    example: "npm install",
    keywords: ["install", "dependencies", "modules", "packages"]
  },
  {
    command: "npm install <package>",
    description: "Install a specific package. Use --save-dev for development dependencies, -g for global installation.",
    example: "npm install express --save-dev",
    keywords: ["install", "package", "dependency", "global", "dev"]
  },
  {
    command: "npm uninstall",
    description: "Remove a package from dependencies. Use -g to uninstall globally installed packages.",
    example: "npm uninstall lodash",
    keywords: ["uninstall", "remove", "package", "dependency"]
  },
  {
    command: "npm update",
    description: "Update packages to their latest versions within semver constraints. Updates package-lock.json.",
    example: "npm update",
    keywords: ["update", "upgrade", "latest", "version"]
  },
  {
    command: "npm run",
    description: "Execute scripts defined in package.json. List available scripts with npm run without arguments.",
    example: "npm run build",
    keywords: ["run", "script", "execute", "build", "start"]
  },
  {
    command: "npm start",
    description: "Run the start script defined in package.json. Shorthand for npm run start.",
    example: "npm start",
    keywords: ["start", "run", "server", "application"]
  },
  {
    command: "npm test",
    description: "Run the test script defined in package.json. Shorthand for npm run test.",
    example: "npm test",
    keywords: ["test", "testing", "run", "spec"]
  },
  {
    command: "npm list",
    description: "Display installed packages in tree format. Use --depth=0 for top-level only, -g for global packages.",
    example: "npm list --depth=0",
    keywords: ["list", "installed", "packages", "tree", "dependencies"]
  },
  {
    command: "npm outdated",
    description: "Check for outdated packages. Shows current, wanted, and latest versions.",
    example: "npm outdated",
    keywords: ["outdated", "check", "versions", "update"]
  },
  {
    command: "npm audit",
    description: "Scan for security vulnerabilities in dependencies. Use --fix to automatically fix issues.",
    example: "npm audit --fix",
    keywords: ["audit", "security", "vulnerabilities", "fix"]
  },
  {
    command: "npm publish",
    description: "Publish package to npm registry. Requires authentication and proper package.json configuration.",
    example: "npm publish",
    keywords: ["publish", "registry", "package", "release"]
  },
  {
    command: "npm version",
    description: "Bump package version. Use patch, minor, or major for semantic versioning.",
    example: "npm version patch",
    keywords: ["version", "bump", "semver", "patch", "minor", "major"]
  },
  {
    command: "npm cache",
    description: "Manage npm cache. Use clean to clear cache, verify to check cache integrity.",
    example: "npm cache clean --force",
    keywords: ["cache", "clean", "clear", "verify"]
  },
  {
    command: "npm config",
    description: "Manage npm configuration. Set registry, proxy, or other npm settings.",
    example: "npm config set registry https://registry.npmjs.org/",
    keywords: ["config", "configuration", "registry", "settings"]
  },
  {
    command: "npm link",
    description: "Create symbolic link for local development. Link packages for testing before publishing.",
    example: "npm link",
    keywords: ["link", "symbolic", "local", "development", "testing"]
  },
  {
    command: "npm search",
    description: "Search npm registry for packages. Find packages by name or keywords.",
    example: "npm search express",
    keywords: ["search", "find", "packages", "registry"]
  },
  {
    command: "npm info",
    description: "Display detailed information about a package. Shows versions, dependencies, and metadata.",
    example: "npm info express",
    keywords: ["info", "information", "package", "details", "metadata"]
  },
  {
    command: "npm ci",
    description: "Clean install from package-lock.json. Faster and more reliable for CI/CD environments.",
    example: "npm ci",
    keywords: ["ci", "clean", "install", "production", "lock"]
  },
  {
    command: "npm prune",
    description: "Remove extraneous packages not listed in package.json. Clean up node_modules folder.",
    example: "npm prune",
    keywords: ["prune", "remove", "extraneous", "clean", "modules"]
  }
];