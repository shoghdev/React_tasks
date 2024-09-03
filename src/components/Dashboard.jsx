import { useEffect, useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from 'axios'

export const Dashboard = () => {
    const [tasks, setTasks] = useState([])
    const addTask = task => {
        setTasks([...tasks, task])
    }

    const handleDelet = id => {
        setTasks(tasks.filter(x=> x.id != id))
    }
    useEffect(()=>{
        axios
        .get("http://localhost:3004/tasks")
        .then(response => {
            setTasks(response.data)
        })
    }, [tasks])

    const changeStat = (id, newStatus) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, newStatus } : task))
    }

    return <div className="dashboard">
        <div className="row">
            <TaskList tasks={tasks} onDelete = {handleDelet} onChangeStat={changeStat}/>
            <AddTask onAdd = {addTask}/>
        </div>
        <Stats tasks={tasks}/>
    </div>
}