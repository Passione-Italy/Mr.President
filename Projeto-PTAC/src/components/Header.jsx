import { Link } from "react-router-dom"


export default function Header() {
return (
    <div class="Header">
        <header>
            <ul>
                <nav class="container-menu">
                    <Link to="/">
                        <li class="menu">Home</li>
                    </Link>

                    <Link to="/cardapio">
                        <li class="menu">Cardápio</li>
                    </Link>

                    <Link to= {<Login />}>
                        <li class="menu">Ofertas</li>
                    </Link>
                </nav>
            </ul>
        </header>
    </div>
 );
}