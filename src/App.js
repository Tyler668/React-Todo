import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // 'C' declare your 'CLASS'
  constructor() {
    // 'C' build out your 'CONSTRUCTOR'
    super();
    this.state = {
      
      data: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  };



   addItem = (item) =>{
     let newState = {};
     newState = {data: [...this.state.data, item]};
     this.setState(newState);
    console.log(this.state)
   };

   setComplete = (e) =>{
    //  let currentList = this.state.data;
    //  currentList.forEach(item =>{
    //    if(item === e.target){
    //      item.completed = true;
    //      item.task = 'done';
    //    }
    //  })

     console.log(e.target);
   }

  //  clearList = () =>{
  //    const currentList = this.state.data;
  //    currentList.forEach(item =>{
  //      if(item.)
  //    }) 
  //  }
   



  render() {
    // 'R' don't forget to call 'RENDER'
    return (
      <div className="App">
          <TodoList setComplete = {this.setComplete} listProps = {this.state} />
          <TodoForm addItem = {this.addItem} listProps = {this.state} />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;