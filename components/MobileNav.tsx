"use client"

import { useState } from "react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "./ui/sheet";
import { Button } from "./ui/button";
import {Menu, SunMoon} from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import {useTheme} from "next-themes";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    className="top-0 right-0 absolute m-4 w-10 px-0 sm:hidden z-40"
                >
                    <Menu size={24} />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetTitle><ThemeMobile /></SheetTitle>
                <MobileLink onOpenChange={setOpen} href="/" className="flex items-center">
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <div className="flex flex-col gap-3 mt-3">
                    <MobileLink onOpenChange={setOpen} href="/blog">Blog</MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/about">About</MobileLink>
                </div>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

function MobileLink({
                        href,
                        onOpenChange,
                        children,
                        className,
                        ...props
                    }: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}

function ThemeMobile(){
    const { theme, setTheme, systemTheme } = useTheme();

    const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");
    return (
        <div className="">
            <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-md border border-gray-300 dark:border-white dark:text-white">
                <SunMoon />
            </button>
        </div>
    )
}