export const UserItem = ({user:{id,name,age,salary}, handleSalaryUp}) => {
    return <tr className={salary > 950000 ? "fill" : null}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{salary}</td>
            <td>
                <button onClick={()=>handleSalaryUp(id)}>salary up</button>
                <button>salary down</button>
                <button>delete</button>
            </td>
    </tr>
}