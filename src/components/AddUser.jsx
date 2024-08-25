import { useRef, useState } from "react"

export const AddUser = ({onAdd}) => {
    //const name  = useRef()

    const [user,setUser] = useState({
        name: "",
        age:18,
        salary:250_000
    })

    const[error,setError] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        if(!user.name.trim() || !user.age || !user.salary) {
            return setError("please fill all the fields")
        }
        setError("")
        onAdd(user)
        setUser({name:"", age: "", salary: ""})
    }
    return <div>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
                <input 
                    type="text" 
                    placeholder="enter your name"
                    //ref = {name}
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                />
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="enter your age"
                    value={user.age}
                    onChange={e => setUser({...user, age: +e.target.value})}
                />
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="enter your salary"
                    value={user.salary}
                    onChange={e => setUser({...user, salary: +e.target.value})}
                />
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
    </div>
}