import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import Snippets from "./Snippets"
import CopyButton from "./CopyButton"
import NotFound from './NotFound'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';


export default function SnippetPage(){
    const Snippetid = location.pathname.split('/snippets/')[1]
    const filteredSnippets = Snippets.filter(snippet=>snippet.id === Snippetid)
    if (filteredSnippets.length === 0){
        return (<NotFound></NotFound>)
    }

    const [code, setCode] = useState("")


    fetch(`https://raw.githubusercontent.com/happyendermangit/discord-snippets/main/snippets/${filteredSnippets[0].id}.md`)
    .then(e=>e.text())
    .then(res=>{
        setCode(res)
    })

    return (
        <div className="pb-400">
            <h1 className="break-words w-[1000px]">{ filteredSnippets[0].shortDesc }  </h1><br />
            <div className="flex items-center justify-center">
                <div className="border-t border-gray-300 w-full"></div>
                <div className="py-3 mx-2 whitespace-nowrap">
                    <span className="text-gray-400 text-sm">{ filteredSnippets[0].date }</span>
                </div>
                <div className="border-t border-gray-300 w-full"></div>
            </div>

            <div>
                <div className="avatar p-1 left-0 flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src={`https://raw.githubusercontent.com/happyendermangit/discord-snippets/main/avatars/${filteredSnippets[0].author.pfp}`} alt="Avatar" />
                    </div>
                    <p id="author" className="px-3 py-3">{filteredSnippets[0].author.name}</p>
                </div>
                <Markdown className="text-start px-10 py-3"
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                            <SyntaxHighlighter style={ atomDark } PreTag="div" language={match[1]} {...props}>
                                {String(children).replace(/\n$/, '')} 

                            </SyntaxHighlighter>
                            
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            );
                        },
                        }}
                    >
                        {code}
                </Markdown>
            </div>
        </div>
    )
}