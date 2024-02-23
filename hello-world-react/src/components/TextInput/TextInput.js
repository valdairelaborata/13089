import React, { useState } from "react";

import MeuComponente from "../meucomponente/MeuComponente";

function TextInput() {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handleSobreNome = (event) => {
    setSobreNome(event.target.value);
  };

  const handleSalvar = () => {
    console.log(nome);
    console.log(sobreNome);
  };

  return (
    <>
      <br></br>
      <input type="text" onChange={handleNome}></input>
      <br></br>
      <input type="text" onChange={handleSobreNome}></input>

      <hr></hr>

      <input type="button" onClick={handleSalvar}></input>

      <MeuComponente nome={nome} sobreNome={sobreNome}></MeuComponente>
    </>
  );
}

export default TextInput;
