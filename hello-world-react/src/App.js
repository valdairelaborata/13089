import logo from "./logo.svg";
import "./App.css";

import BemVindo from "./components/bemvindo/BemVindo";
import MeuComponente from "./components/meucomponente/MeuComponente";

import Item from "./components/item/Item";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

function App() {
  return (
    <div>
      <BemVindo nome="Valdair" sobreNome="Teste"></BemVindo>
      <ul>
        {items.map((item, index) => (
          <Item key={index} text={item}></Item>
        ))}
      </ul>
    </div>
  );
}

export default App;
