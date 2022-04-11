import React from 'react';
import './App.css';


function Helloworld(props){
  return(
    <div id="componente">
      <h3>{props.titulo}</h3>
      {props.texto}
    </div>
  )
}




function App() {
  return (
    <div>
      Este es el componente principal
        <Helloworld titulo="este es el titulo" texto="este es el texto"/>
        <Helloworld titulo="este es el titulo 2" texto="este es el texto 2"/>
        <Helloworld titulo="este es el titulo 3" texto="este es el texto 3"/>
    </div>
  );
}

export default App;
