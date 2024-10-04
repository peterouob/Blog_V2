import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome, IconMoon,
    IconNewSection, IconSun,
    IconTerminal2,
} from "@tabler/icons-react";
import theme from "tailwindcss/defaultTheme";
import {useTheme} from "next-themes";


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
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/blog",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
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
