import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
//cannot return two childs in a component. as it makes it easy to do reconcilation.

function App() {
  return (
    <>
      <Header title = "aditya"></Header>
      <Header title = "aditya"></Header>
    </>
  )
}

export default App
