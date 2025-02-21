"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

interface AuroraBackgroundProps{
    children : React.ReactNode
    className?: string
}

export function AuroraBackgroundPage({children,className} : AuroraBackgroundProps) {
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
                   className="relative flex flex-col items-center justify-center  "
               >
                   {children}
               </motion.div>
           </AuroraBackground>
       </>

    );
}
