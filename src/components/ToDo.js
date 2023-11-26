import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDo({ item, toggleComplete, removeTodo, editTodo }) {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(item.id)}
        className={`${item.completed ? "completed" : "incompleted"}`}
      >
        {item.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(item.id, item.task)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => removeTodo(item.id)} />
      </div>
    </div>
  );
}

export default ToDo;
