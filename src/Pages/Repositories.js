import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./repositories.css";
import CardRepository from "../Components/CardRepository";

export default function Repositories() {
  const repositoriesName = [];
  const [repositoriesList, setRepositoriesList] = useState([]);

  const nome = localStorage.getItem("nome");
 

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${nome}/repos`)
      .then((Response) => {
        setRepositoriesList(Response.data);
      });
  }

  
  handlePesquisa();
  
  let navigate = useNavigate();

  return (
    <div id="repos">  
        {repositoriesList.map((repositoro) => (          
            <CardRepository repository={repositoro} />         
        ))}
      
      <button id="voltar"

        onClick={() => {
          navigate("/");
        }}
      >
        Voltar
      </button>
    </div>
  );
}
