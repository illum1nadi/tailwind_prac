// import React, { Fragment } from "react";
// import { useState } from "react";
// import Header from "./components/Header";

// function App() {
//   const [title, setTitle] = useState("my name is harkirat");

//   return (
//     <div>
//       <button onClick={
//         () => {
//           setTitle(Math.random())
//         }
//       }>Update the title</button>
//       <Header title={title} > </Header>
//       <Header title="harkirat2" > </Header>
//       <Header title="harkirat2" > </Header>
//       <Header title="harkirat2" > </Header>
//       <Header title="harkirat2" > </Header>
//     </div>
//   );
// }


// export default App;

import React, { memo } from "react";
import { useState } from 'react'
import Header from "./components/Header";

function App() {
  const [title, setTitle] = useState("Aditya")
  const staticTitle = "My name is not adi";

  function updateTitle() {
    setTitle(Math.random())
  }

  return (
    <>
      <button onClick={
        updateTitle
      }>Click me to change the title</button>
      <Header title = {title}></Header>
      <Header title = {staticTitle}></Header>
      <Header title = {staticTitle}></Header>
      <Header title = {staticTitle}></Header>
      <Header title = {staticTitle}></Header>
      <Header title = {staticTitle}></Header>
    </>
  )
}

export default App