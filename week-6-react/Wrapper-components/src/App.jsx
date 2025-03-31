import { useState } from 'react'

//prerequisite to using a wrapper.

function App() {
 
  return (
    <>
      <CardWrapper innerComponent={<TextComponent></TextComponent>}>
        
      </CardWrapper> 

      <CardWrapper innerComponent={<TextComponent1></TextComponent1>}>
        
      </CardWrapper> 
    </>
  )
}

function TextComponent() {
  return(
    <div>
      Hi there.
    </div>
  )
}

function TextComponent1() {
  return(
    <div>
      Hi there1.
    </div>
  )
}

function CardWrapper({innerComponent}) {
  return (
    <div style={{border : "2px solid black", padding : "2px"}}>
      {innerComponent}
    </div>
  )
}

export default App
