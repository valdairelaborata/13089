import React, { useState, useEffect } from "react";

import axios from "axios";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    id: 1,
    nome: "",
    descricao: "",
  });
  const [edicaoProduto, setEdicaoProduto] = useState(null);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    const response = await axios.get("http://localhost:3001/itens");
    setProdutos(response.data);
  };

  useEffect(() => {}, [produtos]);

  const adicionarProduto = () => {
    axios.post("http://localhost:3001/itens", novoProduto);

    //setProdutos([...produtos, novoProduto]);

    // setNovoProduto({ id: novoProduto.id + 1, nome: "", descricao: "" });
  };

  const atualizarProduto = () => {
    // setProdutos(
    //   produtos.map((produto) =>
    //     produto.id === novoProduto.id ? novoProduto : produto
    //   )
    // );
    // setNovoProduto({ id: novoProduto.id + 1, nome: "", descricao: "" });
    // setEdicaoProduto(null);

    console.log(novoProduto);
    axios.put("http://localhost:3001/itens/1", novoProduto);
  };

  const excluirproduto = (id) => {
    let produtosTemp = produtos.filter((p) => p.id !== id);
    setProdutos(produtosTemp);
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
