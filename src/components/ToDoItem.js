import { React } from "react";

function ToDoItem(props){
    return  (
            <div className="todo-item">
                <input type="checkbox" checked={props.item.completed}></input>
                <label>{props.item.text}</label>
            </div>
        )
}

export default ToDoItem