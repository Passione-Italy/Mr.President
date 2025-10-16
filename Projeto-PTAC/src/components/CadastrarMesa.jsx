import { useState } from "react";
export default function CadastrarMesa() {
    const [capacidade, setCapacidade] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Capacidade da mesa:", capacidade);
    }

  return (
    <div>
        <h1>Cadastrar Mesa</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="capacidade">Capacidade:</label>
            <input type="number" id="capacidade" name="capacidade" value={capacidade} onChange={(value) => setCapacidade(value)} required />
            <br />
            <button type="submit">Cadastrar</button>
        </form>
    </div>
  )
}[]