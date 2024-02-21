import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function BemVindo(props) {
  return <h1>Olá!! {props.nome}</h1>;
}

function Descricao(props) {
  return <h2>Aqui vamos te apresentar uma descrição - {props.descricao}</h2>;
}

root.render(
  <React.StrictMode>
    <BemVindo nome="Thiago"></BemVindo>
    <Descricao descricao="Detalhes da descrição"></Descricao>
    <BemVindo nome="Alexandre"></BemVindo>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
