import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Count'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch

  return (
    <>
      <button onClick={(e)=> dispatch({type: "INCREMENT"})}>Increment</button>
      <Counter/>
      <button onClick={(e)=> dispatch({type: "DECREMENT"})}>Decrement</button>
    </>
  )
}

export default App
