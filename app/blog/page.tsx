import {posts} from "#site/content"
import {getAllTags, sortPosts, sortTagsByCount} from "@/lib/utils";
import {QueryPagination} from "@/components/QueryPagination";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tag} from "@/components/Tags";
import {PostItem} from "@/components/PostItem";
import {AuroraBackgroundPage} from "@/components/AuroraBackgroundDemo";

const POST_PRE_PAGE = 3

interface BlogPageProps {
    searchParams:{
        page?:string
    }
}
export default async function BlogPage({searchParams}:BlogPageProps){
    const currentPage = Number(searchParams?.page) || 1
    const sortedPosts = sortPosts(posts.filter((post) => post.published))
    const totalPages = Math.ceil(sortedPosts.length / POST_PRE_PAGE)

    const displayPosts = sortedPosts.slice(
        POST_PRE_PAGE * (currentPage - 1 ),
        POST_PRE_PAGE * currentPage
    )

    const tags = getAllTags(posts)
    const sortedTags = sortTagsByCount(tags)
    return (
        <AuroraBackgroundPage>
        <div className="container lg:py-10 dark:bg-zinc-700/10 bg-zinc-50 shadow-2xl rounded-lg ">
            <div className="hidden lg:grid flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl dark:text-zinc-50">Blog</h1>
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
                                        description={description}
                                        tags={tags}
                                    />
                                </li>
                            </ul>
                        );
                    })}
                    <QueryPagination
                        totalPages={totalPages}
                        className="justify-end mt-4 dark:text-zinc-50 "
                    />
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
       </AuroraBackgroundPage>
    );
}