import React, {Component}from 'react';
import './App.css';
import tasks from "./sample/tasks.json"
import Tasks from "./components/tasks.js";


console.log(tasks);

class App extends Component{  
  state={
    tasks:tasks
  }
  render(){
    return(
      <Tasks tasks={this.state.tasks}/>
    )
  }
}


export default App;
