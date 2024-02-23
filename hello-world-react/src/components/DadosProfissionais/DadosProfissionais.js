import React from "react";

function DadosProfissionais({ ocupacoes }) {
  return (
    <div>
      <h2>Dados Profissionais</h2>
      <h3>Últimas 3 Ocupações</h3>
      <ul>
        {ocupacoes.map((ocupacao, index) => (
          <li key={index}>{ocupacao}</li>
        ))}
      </ul>
    </div>
  );
}

export default DadosProfissionais;
