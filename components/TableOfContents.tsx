"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function TableOfContents() {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const tocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hTags = Array.from(document.querySelectorAll("h1")).map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level: 1,
        }));

        setHeadings(hTags);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="fixed top-4 right-4 z-50 lg:block md:block hidden ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-3 rounded-md bg-gray-800 text-white shadow-xl
                hover:bg-gray-700 transition duration-300"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside
                ref={tocRef}
                className={`fixed top-16 right-4 w-80 bg-white dark:bg-gray-900 p-5 shadow-2xl border rounded-lg
                    dark:border-gray-700 transition-all duration-300 ease-in-out transform
                    ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                    z-50 max-h-[70vh] overflow-y-auto `}
            >
               <ul className="space-y-3 ">
                    {headings.map(({ id, text }) => (
                        <li
                            key={id}
                            className={"text-xl font-medium text-gray-800 dark:text-gray-200 "}
                        >
                            <a href={`#${id}`} className="hover:text-blue-500 dark:hover:text-blue-400">
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
