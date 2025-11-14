import { useNavigate } from "react-router-dom";
import '../CSS/perfil.css'
export default function Perfil() {
    const navigate = useNavigate();

    const proxPag = function(){
        navigate("/perfil")
    }

    return (
        <div className="container">
            <div className='login-card'>

                <form onSubmit={proxPag}>
                    <label>Insira seu novo E-mail</label>
                    <input type="text" />

                    <label>Insira sua nova senha</label>
                    <input type="password" />

                    <button type='submit'>atualizar perfil</button>
                </form>

            </div>
        </div>
    );
}
