"use client"
import {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const markdownContent = `
## 🔭 I’m yuntech csie student.
###  📫 How to reach me: hellolinpeter@gmail.com 
`;

interface AboutContentProps {
    className ?: string
}

export default function AboutContent({className} : AboutContentProps){
    const [about,setAbout] = useState<string | null>(null)
    useEffect(()=>{
        setAbout(markdownContent)
    },[])
    return (
        <div className={className}>
            {about && (
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                >
                    {about}
                </ReactMarkdown>
            )}
        </div>
    );
}
