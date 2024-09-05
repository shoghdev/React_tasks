import { Basket } from './Basket'
import { ProductList } from './ProductList'

export const Dashboard = ()=> {
    return <div>
        <h1>Online shop</h1>
        <div className='row'>
            <ProductList />
            <Basket />
        </div>
    </div>
}