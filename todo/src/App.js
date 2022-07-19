/*
 * Original Code from GitHub page: https://github.com/shubham1710/React-Todo
 * Original Code Author: https://github.com/shubham1710
 */

import React from "react";
import "./App.css";
//import { Button, Card, Form } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"  
    >
      <span>{todo}</span>
      <div>
        <button variant="outline-danger" onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}> 
    {/* <Form.Group> */}
      <label><b>Add Todo</b></label>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    {/* </Form.Group> */}
    <button variant="primary mb-3" type="submit">
      Submit
    </button>
  </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    var newTodos = [...todos];
    // ERROR BELOW
    // correct answer: newTodos = newTodos.concat(text);
    // newTodos = newTodos.concat(text);
    newTodos.concat(text);
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            // <Card>
            <div className="card">
              {/* <Card.Body> */}
              <div className="card-body">
                <Todo
                key={index}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
                />
              {/* </Card.Body> */}
              </div>
            {/* </Card> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;