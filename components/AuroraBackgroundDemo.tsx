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
                   <div>
                       <div className="text-4xl md:text-7xl font-bold dark:text-white text-center flex">
                           Welcome to my Blog
                       </div>
                       <div className="text-zinc-400 tracking-wide leading-relaxed lg:text-2xl text-center mt-8 :text-xl">
                           Here is to record my life
                       </div>
                   </div>

                   <FloatingDockDemo />
                   <div className="container">
                       <ThemeToggle />
                   </div>

                   <CardHoverEffectDemo />

               </motion.div>
           </AuroraBackground>
       </>

    );
}
