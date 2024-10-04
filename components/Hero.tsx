"use client"

import {FloatingDockDemo} from "@/components/DockDemo";
import ThemeToggle from "@/components/Toggle";
import {CardPost} from "@/components/CardPost";
import React from "react";

export function Hero(){
    return (
        <>
            <div>
                <div className="text-4xl md:text-7xl font-bold dark:text-white text-center flex">
                    Welcome to my Blog
                </div>
                <div className="text-zinc-400 tracking-wide leading-relaxed lg:text-2xl text-center mt-8 :text-xl">
                    Here is to record my life
                </div>
            </div>

            <FloatingDockDemo />

            <CardPost />
        </>
    )
}