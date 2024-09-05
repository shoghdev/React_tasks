import { useContext } from "react"
import { ProductContext } from "../context"
import { Product } from "./Product"

export const ProductList = ()=> {4
    const {products} = useContext(ProductContext)
    return <div className="col-md-7">
        <p>Product List</p>
        <div className="row">
            {
                products.map(elm => <Product key={elm.id} {...elm}/>)
            }
        </div>
    </div>
}