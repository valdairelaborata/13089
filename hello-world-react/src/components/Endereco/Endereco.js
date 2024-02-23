import React from "react";

function Endereco({ tipo, rua, numero, cidade }) {
  return (
    <div>
      <h3>
        {tipo === "residencial" ? "Endereço Residencial" : "Endereço Comercial"}
      </h3>
      <p>Rua: {rua}</p>
      <p>Número: {numero}</p>
      <p>Cidade: {cidade}</p>
    </div>
  );
}

export default Endereco;
