"use client"
import { useEffect } from "react";
import mermaid from "mermaid";
import { cn } from "@/lib/utils";

interface MermaidProps {
    chart: string;
}

const  MermaidDiagram = ({ chart }: MermaidProps) => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    return (
        <div className={cn("my-6 p-4 border rounded-md bg-gray-50")}>
            <div className="mermaid">{chart}</div>
        </div>
    );
}

export default  MermaidDiagram;
