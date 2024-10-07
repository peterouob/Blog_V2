import type { Metadata } from "next";
import "./globals.css";
import { FloatingNavComponent } from "@/components/Nav"
import {Providers} from "@/components/Providers";
import {SiteFooter} from "@/components/Fotter";
import {MobileNav} from "@/components/MobileNav";
import React from "react";
import {PageHeader} from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is my blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className="min-h-dvh"
      >

    <Providers>
        <MobileNav/>

        <div>
            {/*<NavbarDemo />*/}
            <PageHeader />
            <FloatingNavComponent />
            <main>
                {children}
            </main>
            <SiteFooter />
        </div>
    </Providers>
      </body>
    </html>
  );
}
