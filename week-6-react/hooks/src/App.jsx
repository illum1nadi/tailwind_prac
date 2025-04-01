import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [number, setNumb] = useState(0)


  //Using memos here to prevent loop running when we click counter button as they are unrelated.
  let ans = 0;
  for(let i = 0; i <= number; i++) ans += i;

  return (
    <>
      <input type="text" onChange={
        (e) => {
          setNumb(e.target.value);
        }
      } />
      <p>Sum in {ans}</p>
      <button onClick={
        () => {
          setCount(count + 1);
        }
      }>Counter({count})</button>
    </>
  )
}

export default App