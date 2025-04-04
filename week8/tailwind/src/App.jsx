import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2'>
        <div className='bg-blue-500 col-span-1'>HI</div>
        <div className='bg-cyan-500 col-span-1'>Hello</div>
        <div className='bg-pink-500 col-span-1'>How are you</div>
      </div>
    </>
  )
}

export default App
