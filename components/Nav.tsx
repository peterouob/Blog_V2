"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import useTheme from next-themes
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconSun, IconMoon } from "@tabler/icons-react";
export function FloatingNavComponent() {



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
            name: "Top",
            link: "#",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}