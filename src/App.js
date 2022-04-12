import React, {Component}from 'react';
import tasks from "./sample/tasks.json"
import Tasks from "./components/Tasks.js";
import TaskForm from "./components/TaskForm";

console.log(tasks);

class App extends Component{  
  state={
    tasks:tasks
  }
  render(){
    return(<div>
      <TaskForm/>
      <Tasks tasks={this.state.tasks}/>
      </div>)
  }
}


export default App;
