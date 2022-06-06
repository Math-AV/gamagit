import React from "react";

export default function CardRepository({ repository }) {
  return (
    <div
      style={{
        height: 80,
        width: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px auto",
        border: `5px solid ${getBorderColor(repository.language)}`,
      }}
    >
      <h5 style={{marginTop: 20,}} >{repository.name}</h5>
      <h6 style={{marginBottom: 20,}} >language: {repository.language}</h6>
    </div>
  );
}
function getBorderColor(language) {
  if (language === "JavaScript") return "cyan";
  if (language === "Python") return "orange";
  if (language === "C") return "purple";
  return "white";
}
