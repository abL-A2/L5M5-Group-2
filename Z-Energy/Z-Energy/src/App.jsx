import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Page1 from '../pages/DefaultWeb1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page1 />
    </>
  )
}

export default App