import axios from "axios";
import { useState } from "react"
export const AddTask = ({onAdd}) => {
    const [text, setText ] = useState("");
    const [error,setError] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if(!text.trim()) {
            return setError("Please fill the field")
        }

        setError("")

        axios
        .post("http://localhost:3004/tasks", {text,status:"unstarted"})
        .then(resposne => {
            onAdd(resposne.data)
            setText("")
        })
    }
    return <div>
        <p>AddTask</p>
        {error && <p style={{color:'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={text}
            onChange={event => setText(event.target.value)}/>
            <button>Save</button>
        </form>
    </div>
}