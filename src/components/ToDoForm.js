import React, { useEffect, useState } from "react";

function ToDoForm({ submitFunc, data }) {
  const [value, setValue] = useState(data);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.length === 0) {
      setError(true);
    } else {
      submitFunc(value);
    }
    setValue("");
  }

  useEffect(() => {
    setValue(data);
  }, [data]);

  return (
    <>
      {error && <p className="validation">Type something...</p>}
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="todo-input"
          placeholder="What is the task today"
          onChange={(e) => {
            setError(false);
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
}

export default ToDoForm;
