import { useContext } from "react"
import { ProductContext } from "../context"

export const BasketItem = ({id, name, price, count})=> {
    const {onCountUp, onCountDown, onRemove} = useContext(ProductContext)
    return <>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{price * count}</td>
            <td>
                <button onClick={()=>onCountUp(id)} className='btn btn-primary'>+</button>
                <button onClick={()=>onCountDown(id)} className='btn btn-secondary m-3'>-</button>
                <button onClick={()=>onRemove(id)} className='btn btn-danger'>x</button>
            </td>
        </tr>
    </>
}