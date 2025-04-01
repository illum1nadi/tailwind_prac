import { useState, useEffect, useMemo, useCallback } from 'react'
import React from 'react';
import { Fragment } from 'react';

//rerender happens each time though props are not changing and functional reference is different each time it is redefined.

function App() {

  const [counter, setCounter] = useState(0);

  //fix using use callback hook.
  const a = useCallback(function a() {
    console.log("hi there");
  }, []);
  
  
  return (
    <>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Counter {counter}</button>

      <Demo a = {a}></Demo>
      
    </>
  )
}

const Demo = React.memo(({a}) => {
  console.log("rerender");
  return(
    <>
      HI there.
    </>
  )
})

export default App