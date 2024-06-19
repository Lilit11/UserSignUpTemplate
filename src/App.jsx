import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './SignUp'
import { UserList } from './UsersList'

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "Ann", surname: 'Muradyan', login: "Anna@gmail.com", password: "180895" }
  ])

  const handleAdd = (obj) => {
    setUsers([...users, { ...obj, id: users.length + 1 }])
  }
  return (
    <>
      <UserList
        users={users}
      />
      <SignUp
        onAdd={handleAdd}
        users={users}
      />
    </>
  )
}

export default App
