"use client"
import {HoverEffect} from "@/components/ui/card-hover-effect";
import React, {useState} from "react";
import {posts} from "@/.velite";
import {sortPosts} from "@/lib/utils";

export function MobileCard(){
    const lastPost = sortPosts(posts).slice(0,6)

    return (
        <section className="max-w-full lg:py-10 flex justify-center items-center ">
                <div className="grid w-full lg:grid-cols-3 grid-cols-1 gap-6">
                    {lastPost.map((post, index) => (
                        <div key={post.slug} className="overflow-hidden ">
                            <HoverEffect
                                slug={post.slug}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                tags={post.tags}
                                key={post.slug}
                            />
                        </div>
                    ))}
                </div>

        </section>
    )
}