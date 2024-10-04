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

/*
* <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 ">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
       <div className="px-8 max-w-full grid grid-cols-3">
            {lastPost.map(post=>
                <HoverEffect
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                />
            )}
        </div>
      </section>
* */
export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];
