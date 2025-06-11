import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "@/components/Providers";
import {SiteFooter} from "@/components/Fotter";
import {MobileNav} from "@/components/MobileNav";
import React from "react";
import "katex/dist/katex.min.css";
import {Pheader} from "@/components/Pheader";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is my blog",
  icons: "/avatar.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className="min-h-dvh scrollbar-hide "
      >

    <Providers>
        <MobileNav/>
        <Pheader />
        <div className="flex-grow">
            <main>
                {children}
            </main>
        </div>
    </Providers>
    <SiteFooter />
      </body>
    </html>
  );
}
