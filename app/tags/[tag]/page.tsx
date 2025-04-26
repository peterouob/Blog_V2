import {getAllTags, getPostsByTagsSlug, sortTagsByCount} from "@/lib/utils";
import {posts} from "#site/content"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tag} from "@/components/Tags";
import {slug} from "github-slugger";
import {Metadata} from "next";
import {PostItem} from "@/components/PostItem";

interface  TagPagesProps {
    params: {
        tag:  string
    }
}

// 確保為靜態
export async function generateMetadata({params}:TagPagesProps):Promise<Metadata>{
    const {tag} = params
    return {
        title:tag,
        description: `Posts on the topic of ${tag}`
    }
}

export const generateStaticParams = () => {
    const tags = getAllTags(posts)
    return Object.keys(tags).map(tag => ({tag: slug(tag)}))
}

export default function TagPages({params} : TagPagesProps) {
    const {tag} = params
    const displayPosts = getPostsByTagsSlug(posts,tag)
    const tags = getAllTags(posts)
    const sortedTags = sortTagsByCount(tags)

    return (
            <div className="container lg:py-10 dark:bg-zinc-700/10 bg-zinc-50 shadow-2xl rounded-lg z-40 lg:mt-10 ">
                <div className=" lg:grid  flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                    <div className="flex-1 space-y-4">
                        <h1 className="mt-5 inline-block font-black text-4xl lg:text-5xl dark:text-zinc-50">{tag}</h1>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3 mt-8">
                    <div className="col-span-12 col-start-1 sm:col-span-8 lg:text-xl">
                        {displayPosts.map((post) => {
                            const { slug, date, title, description, tags } = post;
                            return (
                                <ul key={slug}>
                                    <li className="no-underline list-none  dark:text-zinc-50">
                                        <PostItem
                                            slug={slug}
                                            date={date}
                                            title={title}
                                            tags={tags}
                                        />
                                    </li>
                                </ul>
                            );
                        })}
                    </div>
                    <Card className="col-span-12 row-start-3  sm:col-span-4 sm:col-start-9 sm:row-start-1 ">
                        <CardHeader>
                            <CardTitle>Tags</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-4 ">
                            {sortedTags?.map((tag) => (
                                <Tag tag={tag} key={tag} count={tags[tag]} />
                            ))}
                        </CardContent>
                    </Card>

                </div>
            </div>
    )
}
