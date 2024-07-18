import React, { useState } from 'react';
import "./AgeCalc.css";
function AgeCalculator() {
  const [age, setAge] = useState(0);
  const [dogAge, setDogAge] = useState(0);
  const calculateDogAge = () => {
    if (age <= 0) {
      alert('Por favor, ingrese una edad válida.');
    } else {
      let dogAge = age * 7;
      setDogAge(dogAge);
    }
  };
  let message;
  if (dogAge >= 40) {
    message = 'Eres un perro viejo';
  } else if (dogAge >= 20 && dogAge <= 39) {
    message = 'Eres un perro adulto';
  } else {
    message = 'Eres un cachorrito';
  }
  return (
<div>
<h2>Calculadora de Edad Canina</h2>
<label>Ingresa tu edad: </label>
<input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
<button className="button" onClick={calculateDogAge}>Calcular Edad Canina</button>
      {dogAge > 0 && (
<div>
<p>Tu edad canina es: {dogAge} años</p>
<p>{message}</p>
</div>
      )}
</div>
  );
}
export default AgeCalculator;