import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Counter(){
  const [count , setCount] = useState(0)
  function increment(){
    setCount(count => count + 1)
  }
  function decrement(){
    setCount(count => count - 1)
  }
  return (
    <>
    <button onClick={decrement}>-</button>
     <span>{count}</span>
    <button onClick={increment}>+</button>
    </>
  )
}


export function ColorChanger(){
  const [color , setColor] = useState("red")
   function setBlue(){
    setColor(color => color = "blue")
   }

   function setYellow(){
    setColor(color => color = "yellow")
   }


  return (
    <div>
      <div className='colordiv' style={{ backgroundColor: color }}></div>
      <button onClick={setBlue}>blue</button>
      <button onClick={setYellow}>yellow</button>
    </div>
  )
}

export default  Counter