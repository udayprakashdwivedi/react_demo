// app/javascript/components/TodoList.jsx
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';


const Todo = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  return (
    <div>
      <h4>Todo new file</h4>
      <h5><Link to="/todoss">Todo listss</Link></h5>
      <h5><Link to="/">Home</Link></h5>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Todo;
