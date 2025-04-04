import { useMemo, useState } from 'react'


function App() {

  const [inp, setInp] = useState(0)
  const [count, setCount] = useState(0)

  let ans = useMemo(() => {
    let ans = 0;
    for(let i = 0; i <= inp; i++) ans += i;
    console.log("happening again")
    return ans;
  }, [inp])

  return (
    <>
      <input type="text" onChange={(e) => {
        setInp(parseInt(e.target.value, 10));
        console.log(inp)
      }}/>
      <div>{ans}</div>
      <button onClick={() => {
        setCount(count + 1);
      }}>Counter {count}</button>
    </>
  )
}

export default App
