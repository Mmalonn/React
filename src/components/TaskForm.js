import React, {Component} from "react";

export default class TaskForm extends Component{

    state={
        title:'',
        description:'',
    }


    onSubmit=(e)=>{
        e.preventDefault()
        this.props.addTask(this.state.title,this.state.description);
    }

    onChange=(e)=>{
        console.log(
            e.target.name,e.target.value
        )
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="title"
                placeholder="write a task"
                onChange={this.onChange}
                value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                name="description"
                placeholder ="write a description"
                onChange={this.onChange}
                value={this.state.description}/>
                <input 
                type="submit"/>
            </form>
        )
    }
}