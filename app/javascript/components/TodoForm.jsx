import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todoActions';
import { useNavigate, Link } from 'react-router-dom';

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const formData = new FormData();
    formData.append('todo[title]', title);
    if (image) {
      formData.append('todo[image]', image);
    }
    if (images.length > 0) {
      images.forEach((img) => {
        formData.append('todo[images][]', img);
      });
    }
    await createTodo(formData);
    setTitle('');
    setImage(null);
    setImages([]);
    navigate('/todoss');
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length === 1) {
      setImage(files[0]);
    } else {
      setImages([...images, ...files]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <h5><Link to="/todoss">Todo list</Link></h5>
    </div>
  );
};

export default connect(null, { createTodo })(TodoForm);
