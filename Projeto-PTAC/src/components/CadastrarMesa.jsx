import { useState } from "react";
import "../CSS/CadastrarMesa.css";

export default function CadastrarMesa() {
  const [capacidade, setCapacidade] = useState(0);
  const [codigoMesa, setCodigoMesa] = useState("");
  const [reservada, setReservada] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (capacidade <= 0) {
      alert("A capacidade deve ser maior que 0.");
      return;
    }

    if (codigoMesa.trim() === "") {
      alert("Por favor, insira o código único da mesa.");
      return;
    }

    console.log("Dados da Mesa:");
    console.log("Capacidade:", capacidade);
    console.log("Código:", codigoMesa);
    console.log("Reservada:", reservada ? "Sim" : "Não");
  };

  return (
    <div className="c1">
      <h1>Cadastrar Mesa</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="capacidade">Quantidade de lugares</label>
        <input
          id="capacidade"
          type="number"
          value={capacidade}
          onChange={(e) => setCapacidade(Number(e.target.value))}
          min={1}
        />

        <label htmlFor="codigoMesa">Código único da mesa</label>
        <input
          id="codigoMesa"
          type="text"
          value={codigoMesa}
          onChange={(e) => setCodigoMesa(e.target.value)}
        />

        <label>Mesa já está reservada?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="reservada"
              value="sim"
              checked={reservada === true}
              onChange={() => setReservada(true)}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="reservada"
              value="nao"
              checked={reservada === false}
              onChange={() => setReservada(false)}
            />
            Não
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
