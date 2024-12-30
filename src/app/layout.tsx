import { uploadRouter } from "@/app/api/uploadthing/core";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { extractRouterConfig } from "uploadthing/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hana Shop (花屋)",
  description: "A shop to buy flowers for your loved ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />
          <NextSSRPlugin routerConfig={extractRouterConfig(uploadRouter)} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
