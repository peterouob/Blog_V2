"use client"
import {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const markdownContent = `
## 🔭 I’m yuntech csie student.
###  📫 How to reach me: hellolinpeter@gmail.com 

[![My Skills](https://skillicons.dev/icons?i=firebase,mysql,redis,mongo&perline=4)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=html,css,scss,javascript,typescript,c&perline=6)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=react,nextjs,vue,nuxt&perline=6)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=golang,php,rust,nodejs&perline=4)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=kafka,rabbitmq&perline=2)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=aws,vercel,cloudflare&perline=3)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=docker,grafana,kubernetes&perline=4)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=git,github,gitlab&perline=4)](https://skillicons.dev)
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