import React, { useState, useEffect } from "react";

import axios from "axios";

import Confirma from "../confirma/confirma";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
  });
  const [edicaoProduto, setEdicaoProduto] = useState(null);
  const [recarregar, SetRecarregar] = useState(false);
  const [registroExcluir, setRegistroExcluir] = useState("");
  const [produtoExcluir, setProdutoExcluir] = useState("");
  const [exibirConfirma, setExibirConfirmar] = useState("");

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
    /* `setEdicaoProduto` is a function used to update the state of `edicaoProduto` in the `Produtos`
    component. It is called with a new value to update the `edicaoProduto` state variable. In this
    code snippet, it is used to set the product that is being edited in the form when the user
    clicks on the "Editar" button for a specific product. */
    setEdicaoProduto(null);
    axios.put(`http://localhost:3001/itens/${novoProduto.id}`, novoProduto);

    listar();
  };

  const excluirproduto = (produto) => {
    // axios.delete(`http://localhost:3001/itens/${id}`);
    // listar();

    setProdutoExcluir(produto);
    setExibirConfirmar(true);
    setRegistroExcluir(produto.nome);
  };

  const confirmaExclusao = () => {
    axios.delete(`http://localhost:3001/itens/${produtoExcluir.id}`);
    setExibirConfirmar(false);
    setProdutoExcluir(null);

    listar();
  };

  const cancelaExclusao = () => {
    setExibirConfirmar(false);
    setProdutoExcluir(null);
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
            <button onClick={() => excluirproduto(produto)}>Excluir</button>
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

      <hr></hr>
      <Confirma
        exibir={exibirConfirma}
        registro={registroExcluir}
        confirmaExclusao={confirmaExclusao}
        cancelaExclusao={cancelaExclusao}
      ></Confirma>
    </div>
  );
}

export default Produtos;
