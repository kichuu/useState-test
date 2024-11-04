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

export default Counter