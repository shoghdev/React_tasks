import { useState } from "react"
import {AddToDoList} from './AddToDoList'
import {List} from './List'
import { FilterToDo } from "./FilterDoDo"

export const ToDoList = () => {
    const [toDo,setToDo] = useState([
        {id:101, text:"Go for a walk", completed:false},
        {id:102, text:"Have a coffee", completed:true},
        {id:103, text:"Do workout", completed:false},
    ])

    const [currentFilter, setCurrentFilter] = useState("all")

    const handdleAdd = text => {
        setToDo([...toDo, {text, completed:false, id:Date.now()}])
    }

    const handelUpdate = id => {
        setToDo(toDo.map(todo => 
            todo.id != id ? todo : {...todo, completed:!todo.completed}
        ))
    }
    return <>
        <AddToDoList 
            onAdd = {handdleAdd}
        />
        <FilterToDo 
            currentFilter = {currentFilter}
            onSet = {setCurrentFilter}
        />
        <List 
            currentFilter = {currentFilter}
            todos = {toDo}
            onUpdate = {handelUpdate}
        />
    </>
}