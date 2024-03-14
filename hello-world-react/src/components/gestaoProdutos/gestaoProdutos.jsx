import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import ProdutoServico from "../../services/produtoServico";

function GestaoProdutos() {
  const history = useHistory();

  const [produtos, setProdutos] = useState([]);

  const addProduct = () => {
    history.push(`/add-product/add`);
  };

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    const response = await ProdutoServico.listar();
    setProdutos(response.data);
  };

  const editar = (id) => {
    history.push(`/add-product/${id}`);
  };

  return (
    <div>
      <h2 className="text-center">Lista de produtos</h2>
      <div>
        <button className="btn btn-primary" onClick={addProduct}>
          Novo Produto
        </button>
      </div>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Códido</th>
              <th> Nome</th>
              <th> Descrição</th>
              <th> Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.codigo}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => editar(produto.id)}
                  >
                    Alterar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestaoProdutos;
