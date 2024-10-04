import {Mail} from "lucide-react";
import {siteConfig} from "@/config/site";
import {Icons} from "@/components/icon";

export function SiteFooter(){
    return <footer>
        <div className=" flex flex-col items-center">

            <div className="flex space-x-2 text-md text-muted-foreground">
                &copy; {siteConfig.copyright}
            </div>
        </div>
    </footer>
}