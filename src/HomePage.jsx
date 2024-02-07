import { useRef,useState } from 'react'
import Snippets from "./Snippets"
import Authors from "./Authors"


export default function HomePage(){

    const [snippets, setSnippets] = useState(Snippets)

    const FilterByAuthor = () => {
        let author = AuthorsMenu.current.value
        let realSnippets = []
        if (author === "all_real"){
            setSnippets(Snippets)
            return;
        }
        
        for (let snippet of Snippets){
            if (snippet.author.name === author){
                realSnippets.push(snippet)
            }
        }
        setSnippets(realSnippets)
    }
    const FilterByInput = () => {
        let searchInput = SearchInput.current.value
        let realSnippets = []
        if (searchInput === ""){
            setSnippets(Snippets)
            return;
        }
        
        for (let snippet of Snippets){
            if (snippet.title.toLowerCase().includes(searchInput.toLowerCase()) || snippet.shortDesc.toLowerCase().includes(searchInput.toLowerCase())){
                realSnippets.push(snippet)
            }
        }
        setSnippets(realSnippets)
    }


    const AuthorsMenu = useRef("authorMenu")
    const SearchInput = useRef("SearchInput")
    const Infomodal = useRef("Infomodal")

    return (
        <>
            <div className="join">
                <div>
                    <div>
                    <input className="input input-bordered join-item" ref={ SearchInput } onChange={ FilterByInput } placeholder="Search..."/>
                    </div>
                </div>
                <select ref={ AuthorsMenu } onChange={ FilterByAuthor } className="select select-bordered join-item">
                    <option disabled selected>Filter By author</option>
                    <option value="all_real">All</option>
                    { 
                        Object.values(Authors).map(author=> <option key={author.name} value={author.name}>{author.name}</option> )  
                    }     

                </select>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">Beta!</span> 
                    <button className="btn join-item" onClick={ FilterByInput }>Search</button>
                </div>
            </div>
            <button className="btn btn-primary ml-10" onClick={ () => { Infomodal.current.showModal() } }>Create snippet</button>
            <dialog ref={ Infomodal } className="modal modal-bottom sm:modal-middle">
            <div className="modal-box" >
                <h3 className="font-bold text-lg">Looking to create a snippet?</h3>
                <p className="py-4">
                 You can read our guide in this <a className="text-sky-400 font-bold underline hover:text-sky-300" href="https://github.com/happyendermangit/discord-snippets/blob/main/guide.md">document</a>
                </p>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Okay</button>
                </form>
                </div>
            </div>
            </dialog>

            <div className="snippets">
                { 
                snippets.map((snippet,key)=>(
                    <div className="card bg-base-100 shadow-xl shadow-lg snippet" key={key}>
                        <div className="card-body text-start">
                            <h2 className="card-title">{snippet.title}</h2>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src={`https://raw.githubusercontent.com/happyendermangit/discord-snippets/main/avatars/${snippet.author.pfp}`} alt="Avatar" />
                                </div>
                                <a className="font-bold underline" href={`https://discord.com/users/${snippet.author.id}`}><p id="author" className="px-3 py-3">{snippet.author.name}</p></a>
                            </div>
                            <p>{snippet.shortDesc}</p>
                            <div class="card-actions justify-start">
                                {snippet.tags.map((e,key_)=><div key={key_} class="badge badge-outline">{e}</div> )}
                            </div>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={ () => { location.href = `/snippets/${snippet.id}` } }>View</button>
                            </div>
                            </div>
                    </div>
                )) 
                }
            </div>
        </>
    )
}