import React, { useState } from "react";
import ComponenteMsg from "./Componentes/ComponenteMsg";
import AgeCalculator from "./Componentes/AgeCalculator/AgeCalculator";
import RickAndMortyComponent from "./Componentes/RickAndMortyComponent";
import PokemonComponent from "./Componentes/PokemonComponent";
import DinoGameComponent from "./Componentes/DinoGame/DinoGameComponent"; // Importa el nuevo componente
import Product from "./Componentes/Producto";
import Navbar from "./Componentes/NavBar";
import "./App.css";

function App() {
  const [isMsgModuleEnabled, setShowComponentMsg] = useState(false);
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState(false);
  const [isRickAndMortyModuleEnabled, setRickAndMortyModuleEnabled] = useState(false);
  const [isPokemonModuleEnabled, setPokemonModuleEnabled] = useState(false);
  const [isDinoGameModuleEnabled, setDinoGameModuleEnabled] = useState(false); // Nuevo estado para el módulo del juego de dinosaurio

  const toggleMsgModule = () => {
    setShowComponentMsg(!isMsgModuleEnabled);
  };
  const toggleAgeModule = () => {
    setAgeModuleEnabled(!isAgeModuleEnabled);
  };
  const toggleRickAndMortyModule = () => {
    setRickAndMortyModuleEnabled(!isRickAndMortyModuleEnabled);
  };
  const togglePokemonModule = () => {
    setPokemonModuleEnabled(!isPokemonModuleEnabled);
  };
  const toggleDinoGameModule = () => {
    setDinoGameModuleEnabled(!isDinoGameModuleEnabled);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Hola mundo, bienvenidos a React</h1>
        <center>
          <button className="button" onClick={toggleMsgModule}>
            {isMsgModuleEnabled
              ? "Deshabilitar Módulo Mensaje"
              : "Habilitar Módulo Mensaje"}
          </button>
          <button className="button" onClick={toggleAgeModule}>
            {isAgeModuleEnabled
              ? "Deshabilitar Módulo Edad Canina"
              : "Habilitar Módulo Edad Canina"}
          </button>
          <button className="button" onClick={toggleRickAndMortyModule}>
            {isRickAndMortyModuleEnabled
              ? "Deshabilitar Módulo Rick and Morty"
              : "Habilitar Módulo Rick and Morty"}
          </button>
          <button className="button" onClick={togglePokemonModule}>
            {isPokemonModuleEnabled
              ? "Deshabilitar Módulo Pokemon"
              : "Habilitar Módulo Pokemon"}
          </button>
          <button className="button" onClick={toggleDinoGameModule}>
            {isDinoGameModuleEnabled
              ? "Deshabilitar Juego de Dinosaurio"
              : "Habilitar Juego de Dinosaurio"}
          </button>
          
          {isDinoGameModuleEnabled && <DinoGameComponent />}
          {isPokemonModuleEnabled && <PokemonComponent />}
          {isRickAndMortyModuleEnabled && <RickAndMortyComponent />}
          {isAgeModuleEnabled && <AgeCalculator />}
          {isMsgModuleEnabled && <ComponenteMsg />}
        </center>
      </div>
    </div>
  );
}

export default App;
