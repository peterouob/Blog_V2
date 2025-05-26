"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/Toggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {useTheme} from "next-themes"; // 導入 motion

export function Pheader() {
    const pathname = usePathname();
    const { theme } = useTheme();

    const overlayColor =
        theme === "light" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)";
    return (
        <div
            className={cn(
                "relative bg-cover bg-center shadow-lg rounded-b-2xl ",
                pathname === "/" ? "2xl:h-[85rem] lg:h-[60rem] h-[40rem]" : " 2xl:h-[35rem] lg:h-[25rem] h-[20rem]"
            )}
            style={{
                backgroundImage: `url('/blogbg.png')`,
                backgroundBlendMode: 'multiply',
                backgroundColor: overlayColor
            }}
        >
            <header className="hidden md:block lg:block z-50 sticky top-0 mx-auto w-[60%] border-b border-border bg-background/90
                    backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[5rem] shadow-lg rounded-b-2xl ">
                <div
                    className="container mx-auto flex h-full items-center justify-between max-w-screen-2xl">
                    <div className="flex items-center">
                        <Link href="/"
                              className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white">
                            <span>{siteConfig.name}</span>
                        </Link>
                    </div>

                    <nav className=" items-center space-x-4 lg:space-x-6  flex">
                        <Link href="/" className={cn(
                            "text-xl font-medium transition-colors hover:text-primary",
                            pathname === "/" ? "text-foreground" : "text-foreground/60"
                        )}>
                            Home
                        </Link>
                        <Link href="/blog" className={cn(
                            "text-xl font-medium transition-colors hover:text-primary",
                            pathname === "/blog" ? "text-foreground" : "text-foreground/60"
                        )}>
                            Blog
                        </Link>
                        <Link href="/about" className={cn(
                            "text-xl font-medium transition-colors hover:text-primary hidden sm:block",
                            pathname === "/about" ? "text-foreground" : "text-foreground/60"
                        )}>
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <ThemeToggle/>
                    </div>
                </div>
            </header>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:text-6xl md:text-4xl text-2xl font-bold mb-4"
                >
                    Welcome to My Blog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg max-w-2xl lg:text-2xl"
                >
                    紀錄 | 享受
                </motion.p>
            </div>
        </div>
    );
}