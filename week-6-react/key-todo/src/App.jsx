import { useState } from 'react'
import { Todo } from './components/Todo'

let counter = 4;

function App() {
 
  const [todos, setTodos] = useState([{
    id : 1,
    title : "gym jao bc.",
    description : "jaa raha hun bc."
  }, 
  {
    id : 2,
    title : "gym jao bc.",
    description : "jaa raha hun bc."
  }, 
  {
    id : 3,
    title : "gym jao bc.",
    description : "jaa raha hun bc."
  }])

  function addTodo() {
    setTodos([...todos, {
      id : counter++, 
      title : "gym jao bc.",
      description : "jaa raha hun bc."
    }])

  }
  
  return (
    <div>
      <div>
        <input type="text" className='title' />
      </div>
      <div>
        <input type="text" className='description' />
      </div>
      <div>
        <button onClick={addTodo}>Add a Todo</button>
      </div>
      {todos.map(element => 
        <Todo key = {element.id} title = {element.title} description = {element.description}></Todo>
      )}
    </div>
  )
}

export default App
