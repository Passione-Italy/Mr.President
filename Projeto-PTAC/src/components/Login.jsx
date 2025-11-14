import '../CSS/login.css'
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate();

    const proxPag = (event) => {
        event.preventDefault();      
        navigate("/perfil");         
    }

    return (
        <div className="container">
            <div className='login-card'>

                <form onSubmit={proxPag}>
                    <label>Insira seu E-mail</label>
                    <input type="text" />

                    <label>Insira sua senha</label>
                    <input type="password" />

                    <button type='submit'>Logar</button>
                </form>

            </div>
        </div>
    )
}
