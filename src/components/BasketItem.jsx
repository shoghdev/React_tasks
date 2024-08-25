export const BasketItem = ({id, name, price, count, increaseCount, decreaseCount, removeItem})=> {
    return <>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{price * count}</td>
            <td>
                <button onClick={()=>increaseCount(id)} className='btn btn-primary'>+</button>
                <button onClick={()=>decreaseCount(id)} className='btn btn-secondary m-3'>-</button>
                <button onClick={()=>removeItem(id)} className='btn btn-danger'>x</button>
            </td>
        </tr>
    </>
}