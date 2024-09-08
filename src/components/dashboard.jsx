import { AddUser } from "./adduser"
import { UsersList } from "./userslist"

export const Dashboard =() =>{
    return <>
        <UsersList />
        <AddUser />
    </>
}