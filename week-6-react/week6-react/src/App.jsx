import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
//cannot return two childs in a component. as it makes it easy to do reconcilation.



function App() {
  const [title, setTitle] = useState("Aditya")

  return (
    <>
      <button onClick={
        () => {
          setTitle(Math.random())
        }
      }>Click me to change the title</button>
      <Header title = {`My name is ${title}`}></Header>
      <Header title = "My name is not Aditya"></Header>
    </>
  )
}

export default App