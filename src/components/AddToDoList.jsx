import { useState } from "react"

export const AddToDoList = ({onAdd}) => {
    const [text, setText] = useState("")
    const handleSubmit = event => {
        event.preventDefault()
        if(text.trim()) {
            onAdd(text)
            setText("")
        }
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button>submit</button>
        </form>
    </>
}