import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub, IconBrandGitlab, IconBrandGmail, IconBrandInstagram,
    IconHome,
    IconTerminal2,
} from "@tabler/icons-react";
import theme from "tailwindcss/defaultTheme";
import {useTheme} from "next-themes";
import {siteConfig} from "@/config/site";


export function FloatingDockDemo() {
    const { theme, setTheme, systemTheme } = useTheme(); // Get theme, setTheme and systemTheme

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Blog",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/blog",
        },
        {
            title: "Gitlab",
            icon: (
                <IconBrandGitlab className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: siteConfig.links.gitlab,
        },
        {
            title: "Gmail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: siteConfig.links.gmail,
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: siteConfig.links.instagram,
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: siteConfig.links.github,
        },

    ];
    return (
        <div className="lg:flex lg:items-center lg:justify-center lg:h-[15rem] lg:text-3xl ">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
