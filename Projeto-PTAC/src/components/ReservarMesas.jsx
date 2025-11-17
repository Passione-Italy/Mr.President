import '../CSS/reservarMesa.css'

export default function ReservarMesas () {
    return(
        <div className="container">

<form>

    <label>Insira a data que desaja reservar</label>
<input type="date"/>
    <label>Insira o horario da reserva</label>
<input type="time"/>
    <label>Insira seu nome</label>
<input type="text"/>
    <label>Insira um numero de contato</label>
<input type="number"/>
    <label>Insira o numero da mesa</label>
<input type="number"/>

    <button type="submit">ENVIAR</button>
</form>

        </div>
    )
}