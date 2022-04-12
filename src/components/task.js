import React,{Component} from "react";
import "../App.css"
import PropTypes from "prop-types"




class Task extends Component{
    render(){
        const {task}=this.props;
        return <div className="div">
             {task.title}-
             {task.description}-
             {task.id}
             <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}
             />
             <button 
             style={botonDelete}
             onClick={this.props.deleteTask.bind(this,task.id)}
             >X</button>  
        </div>
    }
}

Task.propTypes={
    task:PropTypes.object.isRequired
}

const botonDelete={
    fontSize: "18px",
    background: "#ea2027",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "50%",
    cursor:"pointer"
}
export default Task;