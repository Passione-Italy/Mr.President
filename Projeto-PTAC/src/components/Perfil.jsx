import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const navigate = useNavigate();

    return(
        <main>
          <h2>Seu Perfil</h2>
          <div className="profile">
             <p>Nome:</p>
             <p>Tipo:</p>
             <p>Id:</p>
             <button onClick={() => navigate("/atualizar-perfil")}>Atualizar Perfil</button>
          </div>
        </main>
    )
   }
