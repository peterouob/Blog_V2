"use client"

import Link from "next/link";
import {siteConfig} from "@/config/site";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/icon";
import {usePathname} from "next/navigation";

export function PageHeader(){
    const pathname = usePathname()

    return (
        <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95
        backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[5rem]">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <nav className="flex items-center space-x-4 lg:space-x-6 mt-4">
                    {/* Logo */}
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        {/*<Icons.logo className="h-8 w-8"/>*/}
                        <span className="font-bold text-2xl">{siteConfig.name}</span>
                    </Link>
                    <Link href="/blog" className={cn("text-xl font-medium transition-colors hover:text-primary hidden sm:block",
                        pathname === "/blog" ? "text-foreground" : "text-foreground/60")}>
                        Blog
                    </Link>

                    <Link href="/about" className={cn("text-xl font-medium transition-colors hover:text-primary hidden sm:block",
                        pathname === "/about" ? "text-foreground" : "text-foreground/60")}>
                        About
                    </Link>
                </nav>
            </div>
        </header>
    )
}