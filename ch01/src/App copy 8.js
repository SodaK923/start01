import './App.css';
import React, { useState } from "react";

function ChangeColor(){
  const [bgColor, setBcColor]=useState("white");

  return(
    <div style={{width: "200px", height: "100px", backgroundColor: bgColor, textAlign: "center", lineHeight: "100px"}}
    onMouseEnter={()=>setBcColor("lightblue")}
    onMouseLeave={()=>setBcColor("white")}>
      마우스를 올려보세요
    </div>
  );
}

function App() {

  return (
    <div>
      <ChangeColor />
    </div>
  );
}

export default App;
