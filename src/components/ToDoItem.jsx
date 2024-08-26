import { useState } from "react"

export const ToDoItem = ({item:{id,content}}) => {
    let [taskState,setTaskState] = useState("complete")
    const checkState = () => {
        if(taskState == "complete") {
            setTaskState("cancle")
        } else {
            setTaskState("complete")
        }
        
    }
    return <div className="item">
        <p className={taskState == "cancle" ? "done" : null}>{content}</p>
        <button onClick={checkState}>{taskState}</button>
    </div>
}