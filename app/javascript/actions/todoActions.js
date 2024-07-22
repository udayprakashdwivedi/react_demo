// app/javascript/actions/todoActions.js
import axios from 'axios';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export const UPDATE_TODO_TITLE_SUCCESS = 'UPDATE_TODO_TITLE_SUCCESS';
export const UPDATE_TODO_TITLE_FAILURE = 'UPDATE_TODO_TITLE_FAILURE';

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  payload: error
});

export const createTodoSuccess = todo => ({
  type: CREATE_TODO_SUCCESS,
  payload: todo
});

export const createTodoFailure = error => ({
  type: CREATE_TODO_FAILURE,
  payload: error
});

export const updateTodoSuccess = todo => ({
  type: UPDATE_TODO_SUCCESS,
  payload: todo
});

export const updateTodoFailure = error => ({
  type: UPDATE_TODO_FAILURE,
  payload: error
});

export const deleteTodoSuccess = id => ({
  type: DELETE_TODO_SUCCESS,
  payload: id
});

export const deleteTodoFailure = error => ({
  type: DELETE_TODO_FAILURE,
  payload: error
});

export const updateTodoTitleSuccess = todo => ({
  type: UPDATE_TODO_TITLE_SUCCESS,
  payload: todo
});

export const updateTodoTitleFailure = error => ({
  type: UPDATE_TODO_TITLE_FAILURE,
  payload: error
});

export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get('/todos');
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};

export const createTodo = (todoData) => async dispatch => {
  try {
    const response = await axios.post('/todos', todoData);
    dispatch(createTodoSuccess(response.data));
  } catch (error) {
    dispatch(createTodoFailure(error.message));
  }
};

export const updateTodo = (id, updatedData) => async dispatch => {
  try {
    const response = await axios.patch(`/todos/${id}`, updatedData);
    dispatch(updateTodoSuccess(response.data));
  } catch (error) {
    dispatch(updateTodoFailure(error.message));
  }
};

export const deleteTodo = (id) => async dispatch => {
  try {
    await axios.delete(`/todos/${id}`);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    dispatch(deleteTodoFailure(error.message));
  }
};

export const updateTodoTitle = (id, newTitle) => async dispatch => {
  try {
    const response = await axios.patch(`/todos/${id}`, { title: newTitle });
    dispatch(updateTodoTitleSuccess(response.data));
  } catch (error) {
    dispatch(updateTodoTitleFailure(error.message));
  }
};
