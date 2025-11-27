import '../CSS/cardapio.css'
export default function Cardapio() {
    return (
        <main className="perfil-container">
          <h1>Cardápio:</h1>
          <div className='cardList'>
            <div className='cardItem'>
                <img className="food" src="https://www.galbani.com.br/wp-content/uploads/2024/11/Pizza-marguerita.webp" alt="pizza_margherita" />
              <h2>Pizza Margherita</h2>
              <p>Descrição: Tradicional pizza italiana com molho de tomate, mussarela e manjericão.</p> 
          </div>

          <div className='cardItem'>
                <img className="food" src="https://receitadelicia.com.br/wordpress/wp-content/files/receitadelicia.com.br/2024/08/salada-de-tomate-e-queijo-com-manjericao-frescor-e-sabor.webp" alt="pizza_margherita" />
              <h2>Caprese</h2>
              <p>Descrição: Uma salada italiana simples e refrescante.</p> 
          </div>

          <div className='cardItem'>
                <img className="food" src="https://sabores-new.s3.amazonaws.com/public/2024/11/file-a-parmegiana.jpg" alt="pizza_margherita" />
              <h2>Filé a Parmegiana</h2>
              <p>Descrição: Um prato feito com bifes empanados e fritos, cobertos com molho de tomate e queijo mussarela derretido.</p> 
          </div>
          </div>
        </main>
    );
}
