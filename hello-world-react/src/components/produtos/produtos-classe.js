// import React, { Component } from "react";

// class Produtos extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       produtos: [],
//       novoProduto: { id: 1, nome: "", descricao: "" },
//       edicaoProduto: null,
//     };
//   }

//   componentDidMount() {
//     const produtosSalvos = JSON.parse(localStorage.getItem("produtos"));
//     if (produtosSalvos) {
//       this.setState({ produtos: produtosSalvos });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.produtos !== this.state.produtos) {
//       localStorage.setItem("produtos", JSON.stringify(this.state.produtos));
//     }
//   }

//   adicionarProduto = () => {
//     this.setState((prevState) => ({
//       produtos: [...prevState.produtos, prevState.novoProduto],
//       novoProduto: {
//         id: prevState.novoProduto.id + 1,
//         nome: "",
//         descricao: "",
//       },
//     }));
//   };

//   excluirProduto = (id) => {
//     this.setState((prevState) => ({
//       produtos: prevState.produtos.filter((produto) => produto.id !== id),
//     }));
//   };

//   editarProduto = (produto) => {
//     this.setState({
//       edicaoProduto: produto,
//       novoProduto: produto,
//     });
//   };

//   atualizarProduto = () => {
//     this.setState((prevState) => ({
//       produtos: prevState.produtos.map((produto) =>
//         produto.id === prevState.novoProduto.id
//           ? prevState.novoProduto
//           : produto
//       ),
//       novoProduto: {
//         id: prevState.novoProduto.id + 1,
//         nome: "",
//         descricao: "",
//       },
//       edicaoProduto: null,
//     }));
//   };

//   render() {
//     const { produtos, novoProduto, edicaoProduto } = this.state;

//     return (
//       <div>
//         <h1>Lista de Produtos</h1>
//         <ul>
//           {produtos.map((produto) => (
//             <li key={produto.id}>
//               {produto.nome} - {produto.descricao}
//               <button onClick={() => this.excluirProduto(produto.id)}>
//                 Excluir
//               </button>
//               <button onClick={() => this.editarProduto(produto)}>
//                 Editar
//               </button>
//             </li>
//           ))}
//         </ul>
//         <h2>{edicaoProduto ? "Editar Produto" : "Novo Produto"}</h2>
//         <input
//           type="text"
//           placeholder="Nome"
//           value={novoProduto.nome}
//           onChange={(e) =>
//             this.setState({
//               novoProduto: { ...novoProduto, nome: e.target.value },
//             })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Descrição"
//           value={novoProduto.descricao}
//           onChange={(e) =>
//             this.setState({
//               novoProduto: { ...novoProduto, descricao: e.target.value },
//             })
//           }
//         />
//         {edicaoProduto ? (
//           <button onClick={this.atualizarProduto}>Atualizar Produto</button>
//         ) : (
//           <button onClick={this.adicionarProduto}>Adicionar Produto</button>
//         )}
//       </div>
//     );
//   }
// }

// export default Produtos;
