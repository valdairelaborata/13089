import React, { useState, useEffect } from "react";

import Cadastro from "../cadastro/cadastro";

import axios from "axios";

function Lista() {
  const [produtos, setProdutos] = useState([]);
  const [exibeCadastro, setExibeCadastro] = useState(false);
  const [edicaoProduto, setEdicaoProduto] = useState({
    nome: "",
    descricao: "",
  });

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    const response = await axios.get("http://localhost:3001/itens");
    setProdutos(response.data);
  };

  const adicionarProduto = () => {
    setExibeCadastro(true);
  };

  const editarproduto = (produto) => {
    setEdicaoProduto(produto);
    setExibeCadastro(true);

    // setNovoProduto(produto);
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <button onClick={adicionarProduto}>Adicionar Produto</button>

      <Cadastro
        exibeCadastro={exibeCadastro}
        edicaoProduto={edicaoProduto}
      ></Cadastro>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.descricao}
            {/* <button onClick={() => excluirproduto(produto)}>Excluir</button> */}
            <button onClick={() => editarproduto(produto)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
