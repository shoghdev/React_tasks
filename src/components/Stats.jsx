import { useEffect, useState } from "react"
export const Stats = ({tasks}) => {
    const [completed, setCompleted] = useState(0);
    const [inProgress, setInProgress] = useState(0);
    const [unstarted, setUnstarted] = useState(0);

    useEffect(()=>{
        tasks.map(task => task.status == "in progress" ? setInProgress(tasks.filter(task => task.status === "in progress").length) : 
                          task.status == "completed" ? setCompleted(tasks.filter(task => task.status === "completed").length) :
                        setUnstarted(tasks.filter(task => task.status === "unstarted").length))
    },[tasks])

    return <div>
        <p>stats</p>
        <p>Completed: {tasks.length}/{completed}</p>
        <p>In Progress: {tasks.length}/{inProgress}</p>
        <p>Unstarted: {tasks.length}/{unstarted}</p>
    </div>
}