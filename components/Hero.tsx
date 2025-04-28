"use client"

import {CardPost} from "@/components/CardPost";
import React from "react";

export function Hero(){
    return (
        <>
            <div>
                <div className=" lg:text-4xl md:text-4xl text-2xl font-bold dark:text-white text-center flex">
                    Welcome to my Blog
                </div>
            </div>
            <CardPost />
        </>
    )
}
