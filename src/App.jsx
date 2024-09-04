import {Dashboard} from './components/Dashboard'
import './App.css'
import { useState } from 'react'
import { UserContext } from './context'

function App() {
  const [users,setUsers] =useState([
    {id:100, name:"John", age: 45, salary:450000},
    {id:101, name:"David", age: 25, salary:250000},
    {id:102, name:"Ani", age: 33, salary:400000},
    {id:103, name:"Alla", age: 48, salary:350000},
  ])
  const removeUser = id => {
    setUsers(users.filter(user => user.id != id))
  }

  const handleAdd = user => {
    setUsers([...users, {...user, id:100+users.length}])
  }
  return (
    <>
    <UserContext.Provider value={{users, onRemove:removeUser, onAdd: handleAdd}}>
      <Dashboard />
    </UserContext.Provider>
    </>
  )
}

export default App
