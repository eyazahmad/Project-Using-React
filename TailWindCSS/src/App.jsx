import { useState } from 'react'
import Card from './Components/Card'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myArr= {
    username:'Banty',
    age:23
  }

  return (
    <>
      <h1 className='bg-green-400' >Hello tailwind </h1>

      <Card name="Eyaz Ahmad (props)leatn" btnText="click me" />
      <Card name="Banty" btnText="Vist me"/>

  
 
    </>
  )
}

export default App
