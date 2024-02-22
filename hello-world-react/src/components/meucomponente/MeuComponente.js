import React, { Component } from "react";

class MeuComponente extends Component {
  render() {
    return (
      <h1>
        Olá!! {this.props.nome} - {this.props.sobreNome}
      </h1>
    );
  }
}

export default MeuComponente;
