import "./App.css";

import Cadastro from "./components/Cadastro/Cadastro";

function App() {
  // Dados para renderizar
  const dadosBasicos = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
  };

  const enderecoResidencial = {
    rua: "Rua A",
    numero: 123,
    cidade: "Cidade A",
  };

  const enderecoComercial = {
    rua: "Rua B",
    numero: 456,
    cidade: "Cidade B",
  };

  const dadosProfissionais = ["Engenheiro", "Desenvolvedor", "Professor"];

  return (
    <div>
      <Cadastro
        dadosBasicos={dadosBasicos}
        enderecoResidencial={enderecoResidencial}
        enderecoComercial={enderecoComercial}
        dadosProfissionais={dadosProfissionais}
      ></Cadastro>
    </div>
  );
}

export default App;
