import './App.css'
import { UserContext } from './context'
import { Dashboard } from './components/dashboard'
import { useState } from 'react'

export default function App() {
  const [users, setUsers] = useState(
    [
      {
        "id": 1,
        "name": "Alice",
        "surname": "Johnson",
        "age": 28,
        "email": "alice.johnson@example.com",
        "password": "password123"
      },
      {
        "id": 2,
        "name": "Bob",
        "surname": "Smith",
        "age": 35,
        "email": "bob.smith@example.com",
        "password": "securepass456"
      },
      {
        "id": 3,
        "name": "Charlie",
        "surname": "Brown",
        "age": 22,
        "email": "charlie.brown@example.com",
        "password": "charlie2024"
      },
      {
        "id": 4,
        "name": "David",
        "surname": "Williams",
        "age": 40,
        "email": "david.williams@example.com",
        "password": "david1234"
      },
      {
        "id": 5,
        "name": "Emma",
        "surname": "Jones",
        "age": 31,
        "email": "emma.jones@example.com",
        "password": "emma2024!"
      },
      {
        "id": 6,
        "name": "Frank",
        "surname": "Taylor",
        "age": 29,
        "email": "frank.taylor@example.com",
        "password": "frankpassword"
      },
      {
        "id": 7,
        "name": "Grace",
        "surname": "Anderson",
        "age": 26,
        "email": "grace.anderson@example.com",
        "password": "grace2024#"
      },
      {
        "id": 8,
        "name": "Henry",
        "surname": "Thomas",
        "age": 37,
        "email": "henry.thomas@example.com",
        "password": "henry@1234"
      },
      {
        "id": 9,
        "name": "Ivy",
        "surname": "Martinez",
        "age": 33,
        "email": "ivy.martinez@example.com",
        "password": "ivysecure"
      },
      {
        "id": 10,
        "name": "Jack",
        "surname": "Lee",
        "age": 24,
        "email": "jack.lee@example.com",
        "password": "jack2024!"
      }
    ]
  )
  
  const addUser = (user) => {
    const newUser = { ...user, id: users.length + 1 }
    setUsers(users => [...users, newUser] )
  }

  return <>
    <UserContext.Provider value={{users, onAdd:addUser}}>
      <Dashboard />
    </UserContext.Provider>
  </>
}
