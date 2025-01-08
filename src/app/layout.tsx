import { uploadRouter } from "@/app/api/uploadthing/core";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/NavBar";
import { dashboardLinks, homePageLinks } from "@/lib/constants";
import { getUserSession } from "@/lib/server-utils";
import { verifyAdmin } from "@/lib/utils";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();
  let navLinks;

  if (!user || !verifyAdmin(user.email)) {
    navLinks = homePageLinks;
  } else {
    navLinks = dashboardLinks;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="mx-12 my-8 flex justify-center">
            <NavBar links={navLinks} authUser={user} />
          </header>
          <NextTopLoader />
          <NextSSRPlugin routerConfig={extractRouterConfig(uploadRouter)} />
          <div className="mx-4 mb-2 mt-12 px-2 sm:mx-12 sm:mb-8 sm:mt-16 sm:px-4">
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
