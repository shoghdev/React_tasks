import './App.css'
import { AddUSer } from './components/add-user'
import { UserList } from './components/userlist'

function App() {


  return (
    <>
      <UserList age= {"52"}/>
      <AddUSer />
    </>
  )
}

export default App
