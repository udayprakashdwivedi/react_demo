// app/javascript/components/TodoEditForm.jsx
import React, { useState } from 'react';

const TodoEditForm = ({ todo, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default TodoEditForm;
