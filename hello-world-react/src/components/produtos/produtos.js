import React, { useState, useEffect } from "react";

import axios from "axios";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
  });
  const [edicaoProduto, setEdicaoProduto] = useState(null);
  const [recarregar, SetRecarregar] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    const response = await axios.get("http://localhost:3001/itens");
    setProdutos(response.data);
  };

  useEffect(() => {
    if (recarregar) listar();
  }, [recarregar]);

  const adicionarProduto = () => {
    axios.post("http://localhost:3001/itens", novoProduto);
    SetRecarregar(true);
    setNovoProduto({ nome: "", descricao: "" });
  };

  const atualizarProduto = () => {
    setNovoProduto({ nome: "", descricao: "" });
    setEdicaoProduto(null);
    axios.put(`http://localhost:3001/itens/${novoProduto.id}`, novoProduto);

    listar();
  };

  const excluirproduto = (id) => {
    axios.delete(`http://localhost:3001/itens/${id}`);
    listar();
  };

  const editarproduto = (produto) => {
    setEdicaoProduto(produto);
    setNovoProduto(produto);
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.descricao}
            <button onClick={() => excluirproduto(produto.id)}>Excluir</button>
            <button onClick={() => editarproduto(produto)}>Editar</button>
          </li>
        ))}
      </ul>

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
      {edicaoProduto ? (
        <button onClick={atualizarProduto}>Atualizar Produto</button>
      ) : (
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      )}
    </div>
  );
}

export default Produtos;
