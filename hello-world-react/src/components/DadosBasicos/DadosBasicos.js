import React from "react";

function DadosBasicos({ nome, sobrenome, idade }) {
  return (
    <div>
      <h2>Dados Básicos</h2>
      <p>Nome: {nome}</p>
      <p>Sobrenome: {sobrenome}</p>
      <p>Idade: {idade}</p>
    </div>
  );
}

export default DadosBasicos;
