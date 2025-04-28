"use client"
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const markdownContent = `
## 🔭 I’m yuntech csie student.
### 📫 How to reach me: hellolinpeter@gmail.com 

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/o_u_o_b_)
[![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/peterouob)
`;

interface AboutContentProps {
    className?: string;
}

export default function AboutContent({ className }: AboutContentProps) {
    const [about, setAbout] = useState<string | null>(null)
    useEffect(() => {
        setAbout(markdownContent)
    }, [])
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
