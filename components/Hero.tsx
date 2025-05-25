"use client"

import {CardPost} from "@/components/CardPost";
import React from "react";
import {SideBar} from "@/components/Sidebar";

export function Hero() {
    return (
        <>
            <div className="text-center py-10">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    Latest Posts
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-[9]">
                    <CardPost/>
                </div>

                <div className="flex-[3]">
                    <SideBar />
                </div>
            </div>
        </>
    );
}
