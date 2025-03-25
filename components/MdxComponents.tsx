import * as runtime from "react/jsx-runtime"
import Image from "next/image";
import { Callout } from "./callout";
import dynamic from "next/dynamic";

import React from "react";
const MermaidDiagram = dynamic(() => import("./Mermaid"), {
  ssr: false,
});
const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

const Heading = (Tag: "h1" | "h2") => {
    return ({ children }: { children: React.ReactNode }) => {
        const text = typeof children === "string" ? children : "";
        const id = text.toLowerCase().replace(/\s+/g, "-"); // 生成 slug id
        return <Tag id={id} className="scroll-mt-20">{children}</Tag>;
    };
};

const components = {
    Image,
    Callout,
    MermaidDiagram,
    H1: Heading("h1"),
    H2: Heading("h2"),
}

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}
