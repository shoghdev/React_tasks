import { useEffect, useState } from 'react'
import './App.css'
import { Child } from './Child'

export default  function App() {
  const [count,setCount] = useState(0)
  const[products,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data=> {
      console.log(data)
      setProduct(data)
    })
  },[count])

  const remove = id => {
    setProduct(products.filter(x=>x.id !== id))
  }

  return<>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Up</button>
    {
      products.map(p=><Child key={p.id} id={p.id} onRemove ={remove} />)
    }
  </>
}