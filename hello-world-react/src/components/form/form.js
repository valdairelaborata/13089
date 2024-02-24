import React, { useState } from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handleSobreNome = (event) => {
    setSobreNome(event.target.value);
  };

  const handleEnviar = () => {
    alert(nome);
    alert(sobreNome);
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <input
          type="text"
          onChange={handleNome}
          placeholder="Informe o nome..."
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={handleSobreNome}
          placeholder="Informe o sobre nome..."
        ></input>
      </div>

      <button type="button" onClick={handleEnviar}>
        Enviar
      </button>
    </>
  );
}

export default Form;
