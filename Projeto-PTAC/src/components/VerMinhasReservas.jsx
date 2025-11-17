import '../CSS/verReserva.css'
export default function ConsultarReservas() {

 return (
    <div className="container">
<form>

    <label>Insira o Nº da mesa</label>
<input type="number"/>


    <button>Consultar</button>
    <button type="submit">Limpar</button>
</form>
<div className='infos'>
    <p>Status: Reservado</p> <br/>
    <p>capacidade: 4 pessoas</p>
</div>
    </div>
  )
}

