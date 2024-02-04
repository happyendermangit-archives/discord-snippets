import { CopyIcon } from './Icons'
export default function CopyButton(props){
    console.log(props.code)
    return (
        <button className="bg-none" onClick={() => { navigator.clipboard.writeText(props.code) } }><CopyIcon className="hover:bg-white-100"></CopyIcon></button>
    )
}