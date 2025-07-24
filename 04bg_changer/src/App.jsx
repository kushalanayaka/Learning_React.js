import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
   <>
  <div className="w-full h-screen bottom-12 transition-colors duration-300"
      style={{ backgroundColor: color}}>
  <div className="flex flex-wrap justify-center bottom-12 gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=> { setColor("red")}} className="outline-none px-4 py-2 rounded-full text-white" style={{ backgroundColor: "red" }}>Red</button>
    <button onClick={()=> { setColor("brown")}} className="outline-none px-4 py-2 rounded-full text-white" style={{ backgroundColor: "brown" }}>Brown</button>
    <button onClick={()=> { setColor("purple")}} className="outline-none px-4 py-2 rounded-full text-white" style={{ backgroundColor: "purple" }}>Purple</button>
    <button onClick={()=> { setColor("orange")}} className="outline-none px-4 py-2 rounded-full text-black" style={{ backgroundColor: "orange" }}>Orange</button>
    <button onClick={()=> { setColor("yellow")}} className="outline-none px-4 py-2 rounded-full text-black" style={{ backgroundColor: "yellow" }}>Yellow</button>
    <button onClick={()=> { setColor("blue")}}  className="outline-none px-4 py-2 rounded-full text-white" style={{ backgroundColor: "blue" }}>Blue</button>
    <button onClick={()=> { setColor("green")}} className="outline-none px-4 py-2 rounded-full text-white" style={{ backgroundColor: "green" }}>Green</button>
  </div>
</div>
   </>
  )
}

export default App
