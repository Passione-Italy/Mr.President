import '../CSS/home.css'
export default function Home() {
    return (
        <>
        <header>
            <h2>Pizza Mozzarella</h2>
            <div className='header'>
                <a href="/">Home</a>
                <a href="/cardapio">Cardápio</a>
                <a href="/login">Login</a>
                <a href="/cadastrar">Cadastro</a>
                <a href='/VerMinhasReservas' id='minhas_reservas'>Minhas Reservas</a>
            </div>
        </header>
        <img id="background-image" src='https://copilot.microsoft.com/th/id/BCO.cf623cee-8381-46a1-8c72-e0a22c297961.png'/>
        <main className="perfil-container">
          <h1 className='title'>Pizzaria Gyro Zeppeli</h1>
          <h2>Definitivamente um Restaurante</h2>
          <a className='btn-reservar' href="/reservarMesa">Reservar Mesa</a>
        </main>
        <footer>
            <p>xxxxxx (99) 99999-9999 - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </footer>
        </>
    );
}
