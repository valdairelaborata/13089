import React from "react";

import { useHistory } from "react-router-dom";

function GestaoProdutos() {
  const history = useHistory();

  const addProduct = () => {
    history.push("/add-product/");
  };

  return (
    <div>
      <h2 className="text-center">Lista de produtos</h2>
      <div>
        <button className="btn btn-primary" onClick={addProduct}>
          Novo Produto
        </button>
      </div>
    </div>
  );
}

export default GestaoProdutos;
