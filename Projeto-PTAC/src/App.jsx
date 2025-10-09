import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Perfil />
    </>
  )
}

export default App
