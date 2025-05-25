import React from 'react';
import Image from 'next/image';
import { siteConfig } from "@/config/site";

export function SideBar() {
    return (
        <div className="
             flex-col items-center p-7 bg-[#fdfbfb] rounded-lg shadow-md mb-7
            dark:bg-gray-800 dark:text-zinc-50 border border-gray-200 dark:border-gray-700
            w-full mx-auto max-w-sm flex
        ">

            <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-xl shadow-lg">
                <Image
                    src="/avatar.jpg"
                    alt="Profile Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {siteConfig.authors}
            </h2>

            <div className="w-16 h-1 bg-blue-500 rounded mb-4"></div> {/* 藍色短線 */}

            <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-6 px-4">
                I am a student from NYUST <br /><br />
                And Study in CSIE <br /><br />
                I love devops and backend skill
            </p>
        </div>
    );
}
