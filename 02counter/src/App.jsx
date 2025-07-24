import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // let value = 15

  let [value, setValue] = useState(15)

 
  const addValue = () =>   setValue(value => (value  < 20 ? value + 1 : value));
  const removeValue = () =>  setValue(value => (value  > 0 ? value - 1 : value));

  return (
    <>
      <h1>Learning react</h1>
      <h2>Counter value : {value}</h2>
      <button onClick={addValue}>Increase value : {value}</button>
      <br/>
      <button onClick={removeValue}>Decrease value : {value}</button>
      <p>{value}</p>
    </>
  )
}

export default App
