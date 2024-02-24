import React, { useState } from "react";

function MeuComponente() {
  const [dados, setDados] = useState({ nome: "João", idade: 30 });

  const atualizarDados = () => {
    setDados({ ...dados, idade: 35 });
  };

  return (
    <div>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <button onClick={atualizarDados}>Atualizar idade</button>
    </div>
  );
}

export default MeuComponente;
