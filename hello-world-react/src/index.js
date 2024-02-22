import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function BemVindo(props) {
  return (
    <h1>
      Olá!! {props.nome} - {props.sobreNome}
    </h1>
  );
}

function Descricao(props) {
  return <h2>Aqui vamos te apresentar uma descrição - {props.descricao}</h2>;
}

class MeuComponente extends Component {
  render() {
    return (
      <BemVindo
        nome={this.props.primeiroNome}
        sobreNome={this.props.segundoNome}
      ></BemVindo>
    );
  }
}

root.render(
  <React.StrictMode>
    {/* <BemVindo nome="Thiago" sobreNome="Della"></BemVindo>
    <Descricao descricao="Detalhes da descrição"></Descricao>
    <BemVindo nome="Alexandre"></BemVindo> */}
    <MeuComponente primeiroNome="Thiago" segundoNome="Della"></MeuComponente>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
