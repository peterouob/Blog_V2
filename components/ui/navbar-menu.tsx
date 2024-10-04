"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  item,
}: {
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div  className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black  dark:text-white "
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative font-mono rounded-full border w-full border-transparent dark:bg-black dark:border-white/[0.2] bg-zinc-50/30 shadow-input flex  justify-center space-x-4 py-6 "
    >
      {children}
    </nav>
  );
};
