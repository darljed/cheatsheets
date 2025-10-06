export interface Command {
  command: string;
  description: string;
  example?: string;
  keywords: string[];
}

export interface Tool {
  name: string;
  href: string;
  description: string;
  content: string;
  keywords: string[];
  title: string;
  subtitle: string;
}