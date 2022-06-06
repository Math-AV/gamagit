import React from "react";
import { useNavigate } from "react-router-dom";

export default function Repositories() {
    let navigate = useNavigate();
  return (
      <>
      <h1>Erro, usuario n encontrado</h1>
      <button onClick={()=> {navigate("/Home")}}>voltar</button>
      </>  
  )
}