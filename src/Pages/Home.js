import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function App(props) {
  const [usuario, setUsuario] = useState("");
  let navigate = useNavigate();
  
  function salvaEVai () {
    localStorage.setItem('nome', usuario);
    navigate('/repositories');

  }
  
  return (
    <>
      <h1>Veja os Repositórios</h1>
      <h2>coloque o nome do usuario e veja seus repositorios no GitHub.</h2>
    <div >
      <input
        className="usuario"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        />      
      <button id ="pesquisar "type="button" onClick={salvaEVai}>Pesquisar</button>
    </div>  
    </>
  );
}

export default App;
