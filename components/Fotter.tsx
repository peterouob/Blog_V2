import {siteConfig} from "@/config/site";

export function SiteFooter(){
    return <footer>
        <div className=" flex flex-col items-center">

            <div className="flex space-x-2 text-xl text-muted-foreground">
                &copy; {siteConfig.copyright}
            </div>
        </div>
    </footer>
}