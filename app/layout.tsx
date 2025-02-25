import styles from './layout.module.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import  Navbar from "@/components/navbar";
import SparklesCore from '@/components/ui/particles';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mavenberg Innovation",
  description:
    "UI Template",
  icons: {
    icon: "./favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={1}
            className={`${styles.prefixname36509c} -z-50`}
          />
          <main className={styles.prefixname844624}>
            <div className={styles.prefixname11d7aa}>{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
