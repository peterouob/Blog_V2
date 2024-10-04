"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FloatingDockDemo } from "./DockDemo";
import { CardHoverEffectDemo } from "./CardPost";
import ThemeToggle from "@/components/Toggle";
import {MobileNav} from "@/components/MobileNav";

export function AuroraBackgroundDemo() {
    return (
       <>
           <AuroraBackground>
               <motion.div
                   initial={{ opacity: 0.0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{
                       delay: 0.3,
                       duration: 0.8,
                       ease: "easeInOut",
                   }}
                   className="relative flex flex-col gap-4 items-center justify-center px-4"
               >
                   <div className="text-4xl md:text-7xl font-bold dark:text-white text-center flex">
                       Welcome to my Blog
                   </div>
                   <FloatingDockDemo />
                   <ThemeToggle />

                   <h2 className="text-3xl lg:text-7xl font-black text-center dark:text-zinc-50">Latest Posts</h2>
                   <CardHoverEffectDemo />

               </motion.div>
           </AuroraBackground>
       </>

    );
}
