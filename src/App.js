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
          completed: false
        }
      ]
    }
  };



   addItem = (item) =>{
     let newState = {};
     const newItem = {...item, id: Date.now()};
     newState = {data: [...this.state.data, newItem]};
     this.setState(newState);
    console.log(this.state)
   };

   toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };


  clearPurchased = () => {
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };



  render() {
    // 'R' don't forget to call 'RENDER'
    return (
      <div className="App">
          <TodoList toggleItem = {this.toggleItem}  listProps = {this.state} />
          <TodoForm addItem = {this.addItem} listProps = {this.state} clearPurchased = {this.clearPurchased}/>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;