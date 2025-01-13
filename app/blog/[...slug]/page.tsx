import {posts} from "#site/content"
import {notFound} from "next/navigation";
import {MDXContent} from "@/components/MdxComponents";

import "@/styles/mdx.css"
import {Tag} from "@/components/Tags";

interface PostPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: PostPageProps["params"]){
    const slug = params?.slug?.join("/")
    return posts.find((post) => post.slugAsParams === slug)
}
export async function generateStaticParams():Promise<PostPageProps["params"][]>{
    return posts.map(post=>({slug: post.slugAsParams.split("/")}))
}
export default async function PostPage({params}:PostPageProps) {
    const post = await getPostFromParams(params)
    if(!post || !post.published){
        notFound()
    }
    return (
        <>
                <article className="prose sm:prose-xl z-40 container py-10 dark:prose-invert lg:max-w-[80vw] mx-auto lg:mt-10 lg:rounded-2xl lg:mb-10">
                    <h1 className="mb-2 lg:text-5xl">{post.title}</h1>
                    <div className="flex gap-4 m-3 lg:mt-10">
                        {post.tags?.map((tag) => (
                            <Tag tag={tag} key={tag} />
                        ))}
                    </div>
                    {post.description ? (
                        <p className="lg:text-3xl text-xl mt-5 text-muted-foreground">{post.description}</p>
                    ) : null}
                    <hr className="my-4" />
                    <MDXContent code={post.body} />
                </article>
        </>

    );
}