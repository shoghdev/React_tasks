import PropTypes from 'prop-types'
export const UserItem = ({user}) => {
    return <>
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
        </tr>
    </>
}

UserItem.prototype = {
    user: PropTypes.object
}