import "./Button.css";

function Button(props) {
  const handleClick = () => {
    console.log("Opa, clique ok!");
  };

  return (
    <button className="cbutton" onClick={handleClick}>
      {props.texto}
    </button>
  );
}

export default Button;
