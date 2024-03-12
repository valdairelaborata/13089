import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function CadastroProduto() {
  const { id } = useParams();

  const [novoProduto, setNovoProduto] = useState({
    codigo: "",
    nome: "",
    descricao: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  // const history = useHistory();

  // useEffect(() => {
  // aler
  // }, novoProduto);

  // const buscar = async () => {
  //   alert(id);
  //   // const response = await axios.get("http://localhost:3001/itens");
  //   // setProdutos(response.data);
  // };

  const salvar = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/itens", novoProduto);

    setShowNotification(true);

    // history.push("/");
  };

  const Notification = ({ mensagem }) => {
    return (
      <div
        style={{ background: "lightblue", padding: "10px", margin: "10px 0" }}
      >
        {mensagem}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center">Novo produto</h3>
        <div className="card-body">
          {showNotification && (
            <Notification mensagem="Registro salvo com sucesso!!!"></Notification>
          )}
          <form>
            <div className="form-group">
              <label> Código: </label>
              <input
                placeholder="Código"
                value={novoProduto.codigo}
                onChange={(e) =>
                  setNovoProduto({ ...novoProduto, codigo: e.target.value })
                }
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label> Nome: </label>
              <input
                placeholder="Nome"
                value={novoProduto.nome}
                className="form-control"
                onChange={(e) =>
                  setNovoProduto({ ...novoProduto, nome: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label> Descrição: </label>
              <input
                placeholder="Descrição"
                value={novoProduto.descricao}
                className="form-control"
                onChange={(e) =>
                  setNovoProduto({ ...novoProduto, descricao: e.target.value })
                }
              />
            </div>
            <button className="btn btn-success" onClick={salvar}>
              Salvar
            </button>
          </form>
        </div>

        <p>{id}</p>
      </div>
    </>
  );
}

export default CadastroProduto;
