import { HoverEffect } from "./ui/card-hover-effect";
import {sortPosts} from "@/lib/utils";
import {posts} from "#site/content"
import React from "react";

export function CardHoverEffectDemo() {
    const lastPost = sortPosts(posts).slice(0,6)
    return (
        <section className="max-w-full lg:py-10 containe flex justify-center items-center">
            {/*<h2 className="text-3xl lg:text-7xl font-black text-center dark:text-zinc-50">Latest Posts</h2>*/}
            <div className="px-8 max-w-full grid grid-cols-3 ">
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
    );
}