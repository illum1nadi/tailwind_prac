import { useState, useEffect, useMemo } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [number, setNumb] = useState(0)
  //const [final, setFinal] = useState(0)


  //Using memos here to prevent loop running when we click counter button as they are unrelated.

  let count1 = useMemo(() => {
    let ans = 0;
    for(let i = 0; i <= number; i++) ans += i;
    //setFinal(ans)
    console.log("hello")
    return ans;
  }, [number])
  

  return (
    <>
      <input type="text" onChange={
        (e) => {
          setNumb(e.target.value);
        }
      } />
      <p>Sum in {count1}</p>
      <button onClick={
        () => {
          setCount(count + 1);
        }
      }>Counter({count})</button>
    </>
  )
}

export default App