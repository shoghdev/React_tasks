import Types from 'prop-types'
export const UserList = ({age}) => {
    return <>
        <h3>User List</h3>
        <p>How old are you? {age}</p>
    </>
}

UserList.propTypes = {
    age: Types.number
}