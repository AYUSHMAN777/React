import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addvalue = () => {
    if (counter <= 19) {
      setCounter(counter + 1)
    }
    else {
      setCounter(20);
    }
  }
  const removevalue = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
    else {
      setCounter(0);
    }
  }


  return (
    <>
      <h1>Code and Hooks </h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addvalue}> Add Value :{counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value :{counter}</button>
      <p>Footer:{counter}</p>

    </>
  )
}

export default App
