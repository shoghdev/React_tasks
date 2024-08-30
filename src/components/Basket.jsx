import { useEffect } from "react"
import { BasketItem } from "./BasketItem"

export const Basket = ({cart, total, increaseCount, decreaseCount, removeItem})=> {
    useEffect (()=> {
        console.log(total)
    },[total])
    return <div className="col-md-5">
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
            {
                cart.map(elm => <BasketItem key={elm.id} 
                                            increaseCount = {increaseCount} 
                                            decreaseCount = {decreaseCount}
                                            removeItem = {removeItem}
                                            {...elm}/>)
            }

            <tr className="total">
                <td>Total: {total}</td>
            </tr>
            </tbody>
        </table>
    </div>
}