import React, { useState } from 'react';
import './App.css';


import Header from './Header';

function App() {

  const [counter, setCounter] = useState(1); // retorna array: [valor do estado , funcao pra atualizar o valor do estado]

  function handleButtonClikc() {
    setCounter(counter+1);
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`} />

      <button type="button" onClick={handleButtonClikc}>Aumentar</button>
    </div>
  );
}



export default App;
 