import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, {
      title : "new todo",
      description : "new desc",
      completed : false
    }]);
  }

  return (
    <div>
        <button onClick={addTodo}>Add a todo</button>
        {todos.map((todo) => {
          return (
            <Todo title = {todo.title} description = {todo.description}></Todo>
          )
        })}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
