import { useNavigate } from "react-router-dom";
import '../CSS/perfil.css'
export default function Perfil() {
    const navigate = useNavigate();

    const user = {
        nome: "João Silva",
        tipo: "Administrador",
        id: "USR-3942"
    };

    return (
        <main className="perfil-container">
            <header>
                <h2>Seu Perfil</h2>
            </header>

            <section className="profile-card">
                <p><strong>Nome:</strong> {user.nome}</p>
                <p><strong>Tipo:</strong> {user.tipo}</p>
                <p><strong>ID:</strong> {user.id}</p>

                <button 
                    className="btn-atualizar"
                    onClick={() => navigate("/atualizarPerfil")}
                >
                    Atualizar Perfil
                </button>
            </section>
        </main>
    );
}
