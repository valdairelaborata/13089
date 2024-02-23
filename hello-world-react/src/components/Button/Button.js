function Button() {
  const handleClick = () => {
    console.log("Opa, clique ok!");
  };

  return <button onClick={handleClick}>Clique aqui</button>;
}

export default Button;
