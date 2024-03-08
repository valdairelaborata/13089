import React, { useState, useEffect } from "react";

import axios from "axios";

function Cadastro({ exibeCadastro, edicaoProduto, listar }) {
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
  });

  useEffect(() => {
    console.log("Cadastro");
    setNovoProduto(edicaoProduto);
  }, [edicaoProduto]);

  const salvar = () => {
    if (edicaoProduto.id) {
      axios.put(`http://localhost:3001/itens/${edicaoProduto.id}`, novoProduto);
    } else {
      axios.post("http://localhost:3001/itens", novoProduto);
    }

    listar();
  };

  return (
    exibeCadastro && (
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, descricao: e.target.value })
          }
        />
        <button onClick={salvar}>Salvar</button>
      </div>
    )
  );
}

export default Cadastro;
