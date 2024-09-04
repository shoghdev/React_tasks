import {UserList} from './UserList'
import {AddUser} from './AddUser'
export const Dashboard = () => {
    return <div>
        <h3>Dashboard</h3>
        <UserList />
        <AddUser />
    </div>
}