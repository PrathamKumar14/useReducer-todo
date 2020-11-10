import React from "react";
import { ACTIONS } from "./App";

function TODO(props) {
  return (
    <div>
      <h2
        style={{
          color: props.todo.priority ? "red" : "black",
          textDecoration: props.todo.complete ? "line-through" : "none",
        }}
      >
        {props.todo.name}
      </h2>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: props.todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: props.todo.id },
          })
        }
      >
        Delete
      </button>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.PRIORITY_TODO,
            payload: { id: props.todo.id },
          })
        }
      >
        Priority
      </button>
    </div>
  );
}

export default TODO;
