import { useState } from "react";

export default function AtualizarPerfil() {
    return(
        <main>
          <h2>Atualizar Perfil</h2>
          <div className="update-profile">
             <p>Nome:</p>
             <input type="text" />
             <p>Tipo:</p>
             <input type="text" />
          </div>
          <button>Salvar Alterações</button>
        </main>
    )
}
