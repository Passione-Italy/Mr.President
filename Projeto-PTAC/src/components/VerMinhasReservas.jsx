import { useState } from "react";
import '../CSS/verReserva.css'
export default function ConsultarReservas() {
    const [numeroMesa, setNumeroMesa] = useState(0);
    const [statusMesa, setStatusMesa] = useState(false);
    const [capacidade, setCapacidade] = useState(0);


 return (
    <div>
        <h1 id="Title_Consultar">Consultar Reservas</h1>
        <form>
            
            <div class="input_consultar">
                <label htmlFor="numeroMesa">N° da mesa:</label>
                <input type="number" id="numeroMesa" name="numeroMesa" value onChange={(value) => setCapacidade(value)} required />
            </div>
            <div class="input_consultar">
                 <label htmlFor="statusMesa">Status da mesa:</label>
                  <input type="string" id="nomeCliente" name="nomeCliente" value onChange={(value) => setCapacidade(value)} required />
            </div>
            <div class="input_consultar">
                <label htmlFor="capacidade">Capacidade da Mesa:</label>
                 <input type="number" id="capacidade" name="capacidade" value onChange={(value) => setCapacidade(value)} required />
            </div>
            <br />
            <button type="submit">Consultar</button>
            <button type="clear">Limpar</button>
        </form>
    </div>
  )
}

