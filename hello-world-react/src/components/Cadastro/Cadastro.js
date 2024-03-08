import React, { useState, useEffect } from "react";

import axios from "axios";

function Cadastro({ exibeCadastro, edicaoProduto, listar }) {
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const Notification = ({ mensagem }) => {
    return (
      <div
        style={{ background: "lightblue", padding: "10px", margin: "10px 0" }}
      >
        {mensagem}
      </div>
    );
  };

  const Exibir = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

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

    Exibir();
  };

  return (
    exibeCadastro && (
      <div>
        {showNotification && (
          <Notification mensagem="Registro atualizado!!!"></Notification>
        )}
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
