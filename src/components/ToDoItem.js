import React from "react";

class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item: props.item
        }
    }

    render(){
        // console.log(this.state.item);
        return  (
            <div className="todo-item">
                <input type="checkbox" onChange={()=>console.log("item clicked!")} checked={this.state.item.completed}></input>
                <label>{this.state.item.text}</label>
            </div>
        )}
}

export default ToDoItem