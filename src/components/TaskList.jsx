import {Task} from './Task'

export const TaskList = ({tasks, onDelete}) => {
    return <div>
        <p>TaskList</p>
        <div className="list">
           {
            tasks.map(task => <Task key={task.id} onDelete={onDelete} task ={task}/>)
           }
        </div>
    </div>
}