import { posts } from "#site/content";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { QueryPagination } from "@/components/QueryPagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/Tags";
import { PostItem } from "@/components/PostItem";
import { Aurora } from "@/components/Aur";

const POST_PRE_PAGE = 4;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}
export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PRE_PAGE);

  const displayPosts = sortedPosts.slice(
    POST_PRE_PAGE * (currentPage - 1),
    POST_PRE_PAGE * currentPage,
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);
  return (
    <Aurora>
      <div className="container dark:bg-gray-800 bg-zinc-50 shadow-2xl rounded-xl z-40">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-3 mt-8">
          <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:text-xl min-h-full">
            {displayPosts.map((post) => {
              const {slug, date, title, description, tags } = post;
              return (
                <ul key={slug}>
                  <li className="no-underline list-none  dark:text-zinc-50">
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                      key={slug}
                    />
                  </li>
                </ul>
              );
            })}
            <QueryPagination
                totalPages={totalPages}
                className="justify-center sm:justify-end mt-4 dark:text-zinc-50"
            />
          </div>
          <Card className="col-span-12 row-start-3 sm:col-span-4 sm:col-start-9 sm:row-start-1 hidden lg:block mt-4 ">
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
    </Aurora>
  );
}
