import { useContext } from "react"
import { ProductContext } from "../context"

export const Product = ({id, name, price, photo})=> {
    const {onMove} = useContext(ProductContext)
    return <div className="col-md-4">
        <img src={photo} alt={name}  style={{width:200, height:200, objectFit:'cover'}}/>
        <p>{name}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={() => onMove(id)} className="btn btn-outline-dark">Move</button>
    </div>
}