import { useContext } from "react"
import { BasketItem } from "./BasketItem"
import { ProductContext } from "../context"

export const Basket = ()=> {
    const {basket} = useContext(ProductContext)
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
                basket.map(elm => <BasketItem key={elm.id} {...elm}/>)
            }
            </tbody>
        </table>
    </div>
}