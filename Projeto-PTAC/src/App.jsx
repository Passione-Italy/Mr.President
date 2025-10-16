import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'
import AtualizarPerfil from './components/AtualizarPerfil'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Perfil />} />
        <Route path="/atualizar-perfil" element={<AtualizarPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
