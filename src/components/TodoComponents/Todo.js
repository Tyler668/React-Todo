import React, { Component } from "react";
import ReactDOM from "react-dom";

const Todo = props => {
    return (
    <li onClick = {props.setComplete} className = {`item ${props.isComplete ? 'completed' : ''}`}>{props.itemProp}</li>
    );
}
export default Todo;