import { useContext } from "react"
import { UserItem } from "./useritem"
import { UserContext } from "../context"
import PropTypes from 'prop-types'

export const UsersList = () => {
    const {users} = useContext(UserContext)
    return <>
        <h1>All Users</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>suername</th>
                    <th>age</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => <UserItem key={user.id} user={user} />)
                }
            </tbody>
        </table>
    </>
}

UsersList.prototype = {
    users: PropTypes.object
}