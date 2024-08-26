import { ToDoItem } from "./ToDoItem"

export const List = ({items}) => {
    return <div className="list">
        <h3>Things To Do</h3>
       <div>
        {
            items.map(item => <ToDoItem key={item.id} item={item} />)
        }
       </div>
    </div>
}