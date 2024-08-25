import { UserItem } from "./UserItem"
export const UserList = ({users, handleSalaryUp}) => {
    return <div>
        <h3>User list</h3>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item=><UserItem key={item.id} handleSalaryUp ={handleSalaryUp} user={item}/>)
                }
            </tbody>
        </table>
    </div>
}