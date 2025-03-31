import { useState } from 'react'
import React, {Fragment} from 'react';

//Actually using wrappers with the help of the child prop.

function App() {
 
  return (
    <>
      <CardWrapper>
          <div>
            <h1>Hi there</h1>
            <h2>This is me</h2>
          </div>
      </CardWrapper> 

      <CardWrapper>
          Hi there1.
      </CardWrapper> 

    </>
  )
}

const CardWrapper = React.memo(function CardWrapper({children}) {
  console.log(children);
  return (
    <div style={{border : "2px solid black", padding : "2px"}}>
      {children}
    </div>
  )
})

export default App
