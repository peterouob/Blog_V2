"use client"

import {HoverEffect} from "@/components/ui/card-hover-effect";
import React, {useState} from "react";
import {posts} from "@/.velite";
import {sortPosts} from "@/lib/utils";

export function DesktopCard(){
    const lastPost = sortPosts(posts).slice(0,6)

    return (
        <section className="max-w-full lg:py-10 containe flex justify-center items-center">
            {/*<h2 className="text-3xl lg:text-7xl font-black text-center dark:text-zinc-50">Latest Posts</h2>*/}
            <div className="px-8 max-w-full grid lg:grid-cols-3 grid-cols-1">
                {lastPost.map((post) => (
                    <HoverEffect
                        slug={post.slug}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                        tags={post.tags}
                        key={post.slug}
                    />
                ))}
            </div>
        </section>
    )
}