import { useState } from "react"

export const AddToDo = ({onAdd}) => {
    const [listItem,setListItem] = useState({
        content : ""
    })

    const [error,setError] = useState("")

    const handleAdd = event => {
        event.preventDefault()

        if(!listItem.content.trim()) {
            return setError("Please, fill the input")
        }

        setError("")

        onAdd(listItem)

        setListItem({content: ""})
    }

    return <div className="toDo">
        <h3>What do you want to do?</h3>
        <form onSubmit={handleAdd}>
            <input
                type="text" 
                placeholder="What on your mind?"
                value={listItem.content}
                onChange={e => setListItem({ content: e.target.value })} 
            />
            <button>Add</button>
        </form>

        {error && <p className="error">{error}</p>}
    </div>
}