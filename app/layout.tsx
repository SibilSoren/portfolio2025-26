import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Sibil Sarjam Soren | Full Stack Engineer (Backend-heavy) | Node.js · Next.js · AWS",
  description:
    "Senior Software Engineer specializing in scalable Node.js backends and Next.js frontends. See projects, case studies, and contact info.",
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "Next.js Developer",
    "API Developer",
    "Backend-heavy Full Stack Developer",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Next.js (App Router)",
    "React",
    "Redux",
    "MongoDB",
    "Mongoose",
    "AWS (EC2, S3, Lambda)",
    "REST API",
    "GraphQL",
    "Microservices",
    "Serverless",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Scalable backend development",
    "API design and architecture",
    "System design for startups",
    "Performance optimization for Node.js",
    "Backend for logistics platforms",
    "Real-time systems (WebSockets)",
    "Senior Software Engineer India",
    "Remote Node.js Developer",
    "Kolkata Full Stack Developer",
  ],
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
        </ThemeProvider>
      </body>
    </html>
  );
}
