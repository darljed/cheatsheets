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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cheat Sheets"
  },
  other: {
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default"
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
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
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
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
