import {siteConfig} from "@/config/site";

export function SiteFooter(){
    return <footer>
        <div className=" flex flex-col items-center max-h-[80%]">

            <div className="flex space-x-2 xl:text-xl text-sm text-muted-foreground max-h-[80%]">
                &copy; {siteConfig.copyright}
            </div>
        </div>
    </footer>
}
