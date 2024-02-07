export default function Navbar(){
    return (
        <div className="navbar bg-base-100 w-full z-20 top-0 start-0 fixed">
            <div className="flex-1">
                
                <a className="btn h-full btn-ghost text-xl text-[#5865F2]" href="/"> <img width="50px" style={{
                    borderRadius:"5px"
                }} src="https://github.com/happyendermangit/discord-snippets/blob/main/avatars/DISCORD_SNIPPETS.png?raw=true" alt="" /> Discord snippets</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="https://discord.gg/wumpus-central-1087801778365546556">Wumpus Central (FEATURED)</a></li>
                <li><a href="https://discord.gg/REBDYXg2U8">Discord Insiders (FEATURED)</a></li>
                <li><a href="https://discord.gg/gGe2j6hgQh">Support Server</a></li>
                <li><a href="https://github.com/happyendermangit/discord-snippets">GitHub</a></li>
                <li><a href="https://ko-fi.com/happyenderman">KO-FI</a></li>
                <li>
                    <details>
                    <summary>
                        Support
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Report a snippet</a></li>
                        <li><a>TOS</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    
    )
}