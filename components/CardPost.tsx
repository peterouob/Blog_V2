"use client"
import { HoverEffect } from "./ui/card-hover-effect";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import React from "react";

export function CardPost() {
    const lastPost = sortPosts(posts).slice(0, 6);

    return (
        <>
            <section className=" sm:max-w-full lg:py-10 flex justify-center items-center ">
                <div className="px-8 max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-2">
                    {lastPost.map((post, index) => (
                        <div
                            key={post.slug}
                            className={`min-w-[90%] snap-start ${
                                index >= 3 ? "hidden md:block" : ""
                            }`}
                        >
                            <HoverEffect
                                slug={post.slug}
                                title={post.title}
                                date={post.date}
                                tags={post.tags}
                                key={post.slug}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
