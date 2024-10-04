"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import useTheme from next-themes
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconSun, IconMoon } from "@tabler/icons-react"; // Import additional icons

export function FloatingNavComponent() {
    const { theme, setTheme, systemTheme } = useTheme(); // Get theme, setTheme and systemTheme

    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}