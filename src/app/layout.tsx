import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Cheat Sheets - Quick Reference for Professional Tools",
  description: "Comprehensive cheat sheets and quick reference guides for developers and IT professionals. Find commands for Git, Docker, Splunk SPL, Ollama, and more development tools.",
  keywords: [
    "cheat sheets",
    "developer reference",
    "command reference",
    "git commands",
    "docker commands",
    "splunk spl",
    "ollama commands",
    "development tools",
    "programming reference",
    "devops tools",
    "quick reference",
    "professional tools"
  ],
  authors: [{ name: "Darl Jed Matundan" }],
  creator: "Darl Jed Matundan",
  publisher: "Darl Jed Matundan",
  metadataBase: new URL("https://cheatsheets.darl.dev"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Developer Cheat Sheets - Quick Reference for Professional Tools",
    description: "Comprehensive cheat sheets and quick reference guides for developers and IT professionals. Find commands for Git, Docker, Splunk SPL, Ollama, and more development tools.",
    url: "https://cheatsheets.darl.dev",
    siteName: "Developer Cheat Sheets",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Cheat Sheets - Quick Reference for Professional Tools",
    description: "Comprehensive cheat sheets and quick reference guides for developers and IT professionals.",
    creator: "@darlmatundan"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed bottom-4 left-4 z-50">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
