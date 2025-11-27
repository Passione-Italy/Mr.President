import '../CSS/cadastro.css';

export default function Cadastrar() {
    return (
        <div className="cadastro-container">
            <div className="cadastro-card">
                <h2>Cadastre-se</h2>

                <form className="cadastro-form">
                    <div className="input-group">
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu nome" />
                    </div>

                    <div className="input-group">
                        <label>Sobrenome</label>
                        <input type="text" placeholder="Digite seu sobrenome" />
                    </div>

                    <div className="input-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="exemplo@gmail.com" />
                    </div>

                    <div className="input-group">
                        <label>Rua</label>
                        <input type="text" placeholder="Digite sua rua" />
                    </div>

                    <div className="input-group">
                        <label>Número</label>
                        <input type="number" placeholder="123" />
                    </div>

                    <div className="input-group">
                        <label>Bairro</label>
                        <input type="text" placeholder="Digite seu bairro" />
                    </div>

                    <div className="input-group">
                        <label>Cidade</label>
                        <input type="text" placeholder="Cidade" />
                    </div>

                    <div className="input-group">
                        <label>UF</label>
                        <input type="text" maxLength={2} placeholder="MS" />
                    </div>

                    <button className="btn-cadastrar" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
