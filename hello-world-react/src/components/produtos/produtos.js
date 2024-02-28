import React, { useState, useEffect } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    id: 1,
    nome: "",
    descricao: "",
  });

  const [edicaoProduto, setEdicaoProduto] = useState(null);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos"));
    if (produtosSalvos) {
      setProdutos(produtosSalvos);
    }
  }, []);

  useEffect(() => {
    if (produtos.length > 0) {
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }
  }, [produtos]);

  const adicionarProduto = () => {
    setProdutos([...produtos, novoProduto]);
    setNovoProduto({ id: novoProduto.id + 1, nome: "", descricao: "" });
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.descricao}
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
        <button>Atualizar Produto</button>
      ) : (
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      )}
    </div>
  );
}

export default Produtos;
