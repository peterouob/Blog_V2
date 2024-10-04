import {Mail} from "lucide-react";
import {siteConfig} from "@/config/site";
import {Icons} from "@/components/icon";

export function SiteFooter(){
    return <footer>
        <div className="mb-6 mt-14 flex flex-col items-center">
            <div className="mb-3 flex space-x-4">
                <a target="_blank" rel="noreferrer" href="hellolinpeter@gmail.com">
                    <span className="sr-only">Mail</span>
                    <Mail className="h-8 w-8" />
                </a>
                <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
                    <span className="sr-only">Github</span>
                    <Icons.github className="h-8 w-8" />
                </a>

                <a target="_blank" rel="noreferrer" href={siteConfig.links.instagram}>
                    <span className="sr-only">Instagram</span>
                    <Icons.instagram className="h-8 w-8" />
                </a>

                <a target="_blank" rel="noreferrer" href={siteConfig.links.gitlab}>
                    <span className="sr-only">Gitlab</span>
                    <Icons.gitlab className="h-8 w-8" />
                </a>
            </div>
            <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                {siteConfig.authors}
            </div>
        </div>
    </footer>
}