import React, { useState } from 'react';

import Header from './Header';

export default function App() {
  const [counter, setCounter] = useState(0);
  
  function increment(){
    setCounter(counter + 1);
  }
  function descrement(){
    setCounter(counter - 1);
  }

  return (
    <div>
    <Header>contrador: {counter} </Header>
    <button onClick={increment}>Incrementar</button>
    <button onClick={descrement}>Descremente</button>
    </div>
  );
}