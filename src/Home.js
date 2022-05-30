import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import CardRepository from "./Components/CardRepository";

function App(props) {
  const [usuario, setUsuario] = useState("");
  const [listaRepositories, setListaRepositories] = useState([]);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((Response) => {
        console.log(Response.data);
        setListaRepositories(Response.data);
      });
  }

  return (
    <>
      <p>{usuario}</p>
      <input
        className="usuario"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
      {listaRepositories.map((repositoro) => (
        <CardRepository repository={repositoro} />
      ))}
    </>
  );
}

export default App;
