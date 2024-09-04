import { useContext, useState } from "react"
import { UserContext } from "../context"

export const AddUser = () => {
    const {users} = useContext(UserContext)
    const {onAdd} = useContext(UserContext)
    const [user,setUser] = useState ({
        name: "",
        age: 18,
        salary: 100_000
    })

    const handleSubmit = event => {
        event.preventDefault()
        onAdd(user)
    }
    return <div>
        <h3>Add</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="name"
                value={user.name}
                onChange={event => setUser({...user, name:event.target.value})}
            />
           <input 
                type="text" 
                placeholder="age"
                value={user.age}
                onChange={event => setUser({...user, age:event.target.value})}
            />
            <input 
                type="text" 
                placeholder="salary"
                value={user.salary}
                onChange={event => setUser({...user, salary:event.target.value})}
            />
            <button>Add</button>
        </form>
    </div>
}