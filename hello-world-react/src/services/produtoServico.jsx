import axios from "axios";

import config from "../config.json";

const BASE_URL = config.SERVER_URL;

class ProdutoServico {
  listar() {
    return axios.get(BASE_URL);
  }

  buscarPeloId(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  incluir(produto) {
    axios.post(BASE_URL, produto);
  }

  alterar(produto) {
    axios.put(`${BASE_URL}/${produto.id}`, produto);
  }
}

export default new ProdutoServico();
