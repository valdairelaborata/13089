import React from "react";
import { useHistory } from "react-router-dom";

function CadastroProduto() {
  const history = useHistory();

  const salvar = () => {
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center">Novo produto</h3>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label> Código: </label>
              <input placeholder="Código" className="form-control"></input>
            </div>
            <div className="form-group">
              <label> Nome: </label>
              <input placeholder="Nome" className="form-control" />
            </div>
            <div className="form-group">
              <label> Descrição: </label>
              <input placeholder="Descrição" className="form-control" />
            </div>
            <button className="btn btn-success" onClick={salvar}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CadastroProduto;
