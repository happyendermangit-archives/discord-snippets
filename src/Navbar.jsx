export default function Navbar(){
    return (
        <div className="navbar bg-base-100 w-full z-20 top-0 start-0 fixed">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Discord snippets</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="">Discord server</a></li>
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