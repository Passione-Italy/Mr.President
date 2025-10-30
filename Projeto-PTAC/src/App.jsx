import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'
import AtualizarPerfil from './components/AtualizarPerfil'
import ConsultarReservas from './components/ConsultarMesas'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Perfil />} />
        <Route path="/atualizar-perfil" element={<AtualizarPerfil />} />
        <Route path="/consultar-mesa" element={<ConsultarReservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
