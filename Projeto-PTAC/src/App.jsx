import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'
import AtualizarPerfil from './components/AtualizarPerfil'
import ResMesa from './components/ReservarMesas.jsx'
import CadMesa from './components/CadastrarMesa.jsx'
import VerMinhasReservas from './components/VerMinhasReservas.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Perfil />} />
        <Route path="/atualizar-perfil" element={<AtualizarPerfil />} />
        <Route path="/cadastrarMesa" element={<CadMesa />} />
        <Route path="/reservarMesa" element={<ResMesa />} />
        <Route path="/verMinhasReservas" element={<VerMinhasReservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
