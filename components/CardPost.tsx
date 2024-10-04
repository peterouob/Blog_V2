"use client"
import { HoverEffect } from "./ui/card-hover-effect";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import React, { useState, useEffect } from "react";

export function CardPost() {
    const lastPost = sortPosts(posts).slice(0,6)
    const mobileLastPost = sortPosts(posts).slice(0,2)

    return (
        <>
        <section className="lg:hidden max-w-full lg:py-10 flex justify-center items-center">
            <div className="px-8 max-w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
                        {mobileLastPost.map((post, index) => (
                            <div key={post.slug} className="min-w-[90%] snap-start">
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
            <section className="hidden lg:grid max-w-full lg:py-10 containe flex justify-center items-center">
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
        </>
    );
}
