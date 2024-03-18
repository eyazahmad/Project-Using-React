import React from "react";

function ToDoList(props) {
    return(
        <li className="list-items">
            {props.item}
           <span className="icons">
           <i className="fa-sharp fa-solid fa-trash icon-delete"
           onClick={e=>{
            props.deleteItem(props.index)
           }}></i>
           </span>
        </li>
    )
}
export default ToDoList; 