import { useState, useEffect } from 'react'
import { Todos } from './Todos'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3002/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json);
    })
  })

  

  return (
    <>
      <Todos todos = {todos}></Todos>
    </>
  )
}

export default App