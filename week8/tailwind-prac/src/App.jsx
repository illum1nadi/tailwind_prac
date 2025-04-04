import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div style={{
        backgroundColor: "red"
      }}>
        Wassup
      </div>
      <div style={{
        backgroundColor: "green"
      }}>
        Helllo
      </div> 
      <div style={{
        backgroundColor: "blue"
      }}>
        Hi
      </div>
    </div>
  )
}

export default App
