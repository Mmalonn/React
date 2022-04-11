import React from 'react';
import './App.css';


// function Helloworld(props){
//   return(
//     <div id="componente">
//       <h3>{props.titulo}</h3>
//       {props.texto}
//     </div>
//   )
// }

class Helloworld extends React.Component{
  state={
    show:true
  }
  render(){
    if(this.state.show){
      return(
        <div id="componente">
          <h3>{this.props.titulo}</h3>
          {this.props.texto}
          <button onClick={()=> this.setState({show:false})}>cambiar estado</button>
        </div>
      )
    }else{
      return(
        <h1> no hay componente</h1>
      )
    }
  }
}




function App() {
  return (
    <div>
      Este es el componente principal
        <Helloworld titulo="este es el titulo" texto="este es el texto"/>
        <Helloworld titulo="este es el titulo2" texto="este es el texto 2"/>
        <Helloworld titulo="este es el titulo" texto="este es el texto"/>
    </div>
  );
}

export default App;
