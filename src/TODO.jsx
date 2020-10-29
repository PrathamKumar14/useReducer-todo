import React from "react";
import { ACTIONS } from "./App";

function TODO(props) {
  return (
    <div>
      <h2 style={{ color: props.todo.complete ? "#aaa" : "#000" }}>
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
    </div>
  );
}

export default TODO;
