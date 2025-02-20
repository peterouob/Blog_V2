"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

interface HoverEffectProps {
  slug: string,
  title: string,
  description?:string,
  date: string,
  tags?:Array<string>,
  className?:string
}

export const HoverEffect = ({slug,title,description,date,tags,className} : HoverEffectProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "lg:grid-cols-1 rounded-2xl shadow-none p-4 overflow-y-auto transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400",
        className
      )}
    >
      <Link
          href={slug}
          key={slug}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(slug)}
          onMouseLeave={() => setHoveredIndex(null)}
      >

        <Card>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {tags?.map(tag=><CardTag key={tag}/>)}

        </Card>
      </Link>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-10  overflow-hidden bg-gray-800 dark:bg-zinc-400/4 shadow-lg " +
          "border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 ">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-2xl w-full ", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-md ",
        className
      )}
    >
      {children}
    </p>
  );
};

interface CardTagProps {
  className?:string
  children?: React.ReactNode
  key:  string | any | undefined
}

export const CardTag = ({children,key,className} : CardTagProps) => {
  return (
      <div className="flex gap-2" key={key}>
        {children}
      </div>
  )
}
