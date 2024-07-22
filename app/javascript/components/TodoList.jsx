import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, createTodo, updateTodo, deleteTodo, updateTodoTitle } from '../actions/todoActions';
import TodoEditForm from './TodoEditForm';
import { Link } from 'react-router-dom';

const TodoList = ({ todos, fetchTodos, createTodo, updateTodo, deleteTodo, updateTodoTitle }) => {
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleCreateTodo = () => {
    const newTodoData = {
      title: 'New Todo',
      completed: false
    };
    createTodo(newTodoData);
  };

  const handleUpdateTodo = (id, updatedData) => {
    updateTodo(id, updatedData);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id) => {
    setEditTodoId(id);
  };

  const handleEditSubmit = (id, newTitle) => {
    updateTodoTitle(id, newTitle);
    setEditTodoId(null);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <h5><Link to="/addtodo">Create Todo</Link></h5>
      <h5><Link to="/">Home</Link></h5>
      <button onClick={handleCreateTodo}>Add Todo</button>
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Image</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {editTodoId === todo.id ? (
                  <TodoEditForm
                    todo={todo}
                    onSubmit={(newTitle) => handleEditSubmit(todo.id, newTitle)}
                  />
                ) : (
                  todo.title
                )}
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{todo.completed ? 'Completed' : 'Incomplete'}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
              {/* Render single image if only one is attached */}
             
                <img src={todo.image} alt="Todo Image" style={{ maxWidth: '100px' }} />
             
                {Array.isArray(todo.images) && todo.images.map((image, index) => (
                  <img key={index} src={image} alt={`Todo Image ${index}`} style={{ maxWidth: '100px', marginRight: '5px' }} />
                ))}
            </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                {editTodoId !== todo.id && (
                  <>
                    <button onClick={() => handleUpdateTodo(todo.id, { completed: !todo.completed })}>
                      {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => handleEdit(todo.id)}>Edit</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { fetchTodos, createTodo, updateTodo, deleteTodo, updateTodoTitle })(TodoList);
