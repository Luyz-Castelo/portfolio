import React from 'react';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {
  const pessoa = {
    nome: 'Luyz',
    idade: 18
  };

  return (
    <div className="App">
      <Pessoa nome={pessoa.nome} idade={pessoa.idade}/>
    </div>
  );
}

export default App;
