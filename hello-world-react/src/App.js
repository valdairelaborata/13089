import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import GestaoProdutos from "./components/gestaoProdutos/gestaoProdutos";
import CadastroProduto from "./components/cadastroProduto/cadastroProduto";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={GestaoProdutos}></Route>
            <Route path="/add-product/" component={CadastroProduto}></Route>
            <Route path="/add-product/:id" component={CadastroProduto}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
