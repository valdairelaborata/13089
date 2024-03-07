import "./confirma.css";

function Confirma({ exibir, registro, confirmaExclusao, cancelaExclusao }) {
  return (
    exibir && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Deseja realmente excluir o registro?</h2>
          <p className="modal-content">{registro}</p>
          <div className="modal-buttons">
            <button onClick={confirmaExclusao}>Confirmar</button>
            <button onClick={cancelaExclusao}>Cancelar</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Confirma;
