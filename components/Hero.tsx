"use client"

import {CardPost} from "@/components/CardPost";
import React from "react";

export function Hero(){
    return (
        <>
            <div>
                <div className="hidden text-4xl  font-bold dark:text-white text-center md:flex">
                    Welcome to my Blog
                </div>
            </div>
            <CardPost />
        </>
    )
}
