import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {siteConfig} from "@/config/site";
import AboutContent from "@/components/AboutContent";

export default async function AboutPage(){
    return (
            <div className="container max-w-6xl py-6 lg:py-10">
                <div className="flex items-center gap-4 flex-row justify-betweengap-8">
                    <div className="flex-1 space-x-4">
                        <h1 className="inline-block font-black text-4xl lg:text-5xl dark:text-zinc-50">
                            About Me
                        </h1>
                    </div>
                </div>
                <div className=" my-8 flex flex-row gap-8 items-center ">
                    <div className="min-w-48 max-w-48 flex flex-col gap-2 ">
                        <Avatar className="h-48 w-48">
                            <AvatarImage src="/avatar.jpg" alt={siteConfig.authors} />
                            <AvatarFallback>Defer</AvatarFallback>
                        </Avatar>
                        <h2 className="text-2xl font-bold text-center break-words dark:text-zinc-50">
                            {siteConfig.authors}
                        </h2>
                        <p className="text-muted-foreground text-center break-words">
                            Developer
                        </p>
                        <p className=" text-center font-bold text-xl lg:text-2xl dark:text-zinc-50">
                            Life is coding
                        </p>
                        <hr />
                        <p className=" text-center font-bold text-md dark:text-zinc-50 lg:hidden">
                            I am a student from NYUST <br /><br />
                            And Study in CSIE <br /><br />
                            I love devops and backend skill
                        </p>
                    </div>
                    <AboutContent className="prose dark:prose-invert lg:flex gap-2 flex-wrap hidden overflow-hidden" />
                </div>
            </div>
    )
}
