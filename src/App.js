import React, { Component } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

class App extends React.Component {
  // 'C' declare your 'CLASS'
  constructor() {
    // 'C' build out your 'CONSTRUCTOR'
    super();
    this.state = [
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
    ];
  }

  render() {
    // 'R' don't forget to cal; 'RENDER'
    return (
      <div className="App">
          {/* <TodoList></TodoList>
          <TodoForm></TodoForm>
          <Todo></Todo> */}
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;