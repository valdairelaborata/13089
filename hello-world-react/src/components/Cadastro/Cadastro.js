import React from "react";
import DadosBasicos from "../DadosBasicos/DadosBasicos";
import Endereco from "../Endereco/Endereco";
import DadosProfissionais from "../DadosProfissionais/DadosProfissionais";

function Cadastro({
  dadosBasicos,
  enderecoResidencial,
  enderecoComercial,
  dadosProfissionais,
}) {
  return (
    <div>
      <h1>Cadastro</h1>
      <DadosBasicos {...dadosBasicos} />
      <Endereco tipo="residencial" {...enderecoResidencial} />
      <Endereco tipo="comercial" {...enderecoComercial} />
      <DadosProfissionais ocupacoes={dadosProfissionais} />
    </div>
  );
}

export default Cadastro;
