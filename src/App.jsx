import { useState } from 'react'
import './App.css'
import { List } from './components/List'
import { AddToDo } from './components/AddToDo'

export default function App() {
  const [items, setItem] = useState([])
  const addItem = (item) => {
    setItem([...items, {...item, id:100+items.length}])
  }
  
  return <>
    <AddToDo 
      onAdd = {addItem}
    />
    <List 
      items = {items}
    />
  </>
}
