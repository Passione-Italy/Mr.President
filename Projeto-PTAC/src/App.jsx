import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Login from './components/Login.jsx'
import Perfil from './components/Perfil.jsx'
import ResMesa from './components/ReservarMesas.jsx'
import CadMesa from './components/CadastrarMesa.jsx'
import VerMinhasReservas from './components/VerMinhasReservas.jsx'
import AtualizarPerfil from "./components/AtualizarPerfil.jsx"; 
import Cardapio from "./components/Cardapio.jsx";
import Cadastrar from "./components/Cadastro.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/atualizarPerfil" element={<AtualizarPerfil />} />
        <Route path="/cadastrarMesa" element={<CadMesa />} />
        <Route path="/reservarMesa" element={<ResMesa />} />
        <Route path="/verMinhasReservas" element={<VerMinhasReservas />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
