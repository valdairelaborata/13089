import React, { useState } from "react";

import Button from "../Button/Button";

import "./ListaItens.css";

function ListaItens() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState({
    nome: "",
    descricao: "",
    quantidde: "",
  });

  const adicionarItem = () => {
    setItens([...itens, novoItem]);
    setNovoItem({
      nome: "",
      descricao: "",
      quantidade: "",
    });
  };

  const removerItem = (index) => {
    const novaLista = [...itens];
    novaLista.splice(index, 1);
    setItens(novaLista);
  };

  return (
    <div className="lista-container">
      <h2>Lista de itens</h2>
      <input
        type="text"
        value={novoItem.nome}
        onChange={(e) => setNovoItem({ ...novoItem, nome: e.target.value })}
        placeholder="digite o nome..."
        className="input-item"
      ></input>
      <input
        type="text"
        value={novoItem.descricao}
        onChange={(e) =>
          setNovoItem({ ...novoItem, descricao: e.target.value })
        }
        placeholder="digite a descrição..."
        className="input-item"
      ></input>
      <input
        type="number"
        value={novoItem.quantidade}
        onChange={(e) =>
          setNovoItem({ ...novoItem, quantidade: e.target.value })
        }
        placeholder="digite a quantidade..."
        className="input-item"
      ></input>

      <div>
        {/* <button onClick={adicionarItem}>Adicionar item</button> */}
        <Button texto="Adicionar item"></Button>
      </div>

      <ol>
        {itens.map((item, index) => (
          <li key={index} className="lista-item">
            <div>
              <p>
                <strong>Nome:</strong> {item.nome}
              </p>
              <p>
                <strong>Descrição:</strong> {item.descricao}
              </p>
              <p>
                <strong>Quantidade:</strong> {item.quantidade}
              </p>
              <p>
                {/* <button onClick={() => removerItem(index)}>Remover item</button> */}

                <Button></Button>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ListaItens;
