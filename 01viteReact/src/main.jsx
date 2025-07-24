import { StrictMode } from 'react'
import React from 'react';

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'
// import Demo from './Demo.jsx'

const say = "Good Morning"
function MyApp(){
  return (
    <div>
       <h1>My App</h1> 
       <h2>hello {say}</h2>
    </div>
    
  )
}
const AnotherElement = 
<a href='https://www.google.com' target='_blank'>click me</a>


const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target :'_blank'},
  'click here to go google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {reactElement}
  </StrictMode>,
)
