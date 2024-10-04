"use client";

import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();

    const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");

    return (

            <div className="hidden sm:block">
                <button
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className="p-2 rounded-md border border-gray-300 dark:border-white dark:text-white">
                    <SunMoon />
                </button>
            </div>
    );
}
