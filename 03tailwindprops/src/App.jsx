import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    userName : "kushal",
    age : 21
  }
  const myArr = [1,2,3]
 const card1 = "Super sunset"
  const card2 = "beatiful sunset"

  return (
    <>
    <h1 className='bg-green-400 text-black '>Tailwind Test</h1>
    <Card name = "James" caption={card1}/>
    <Card name = "King" />
</>
  )
}

export default App
