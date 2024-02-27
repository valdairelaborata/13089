import React from "react";

import Button from "../Button/Button";

function Endereco({ tipo, rua, numero, cidade }) {
  return (
    // <div>
    //   <h3>
    //     {tipo === "residencial" ? "Endereço Residencial" : "Endereço Comercial"}
    //   </h3>
    //   <p>Rua: {rua}</p>
    //   <p>Número: {numero}</p>
    //   <p>Cidade: {cidade}</p>
    // </div>
    <div>
      <Button texto="Cadastrar novo endereço"></Button>
    </div>
  );
}

export default Endereco;
