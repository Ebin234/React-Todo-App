import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 } from "uuid";
import ToDo from "./ToDo";

function ToDoWrapper() { 
  const [todos, setTodos] = useState([]); 
  const [edit, setEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: v4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo = (id,task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : {...todo, isEditing:false}
      )
    );
    setEdit(true);
    setCurrentValue(task)
  };

  const updateTodo = (item) => {
    setTodos(
      todos.map((todo) =>
        todo.isEditing
          ? { ...todo, task: item, isEditing: !todo.isEditing }
          : todo
      )
    );
    setEdit(false)
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <ToDoForm submitFunc={edit ? updateTodo : addTodo} data={edit ? currentValue : "" }/> 
      {todos?.map(
        (todo) => (
          <ToDo
            key={todo.id}
            item={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default ToDoWrapper;
