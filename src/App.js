import React, { useReducer, useState } from "react";
import TODO from "./TODO.jsx";
import "./styles.css";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function handleFormSubmit(events) {
    events.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div>
      <h1>TODO List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Add todo..."
          type="text"
          value={name}
          onChange={(events) => setName(events.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <TODO key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default App;
