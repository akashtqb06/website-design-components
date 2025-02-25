import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import SparklesCore from "@/components/ui/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mavenberg Innovations",
  description: "Migration-Integration-Aggregation-Reporting",
  generator: "akashinsights.com"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={1}
            className="fixed inset-0 -z-50 w-full h-full bg-transparent pointer-events-none"
          />
          <main>
            <div className="relative overflow-hidden">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
