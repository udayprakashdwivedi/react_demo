// app/javascript/reducers/todoReducer.js
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,UPDATE_TODO_TITLE_SUCCESS,UPDATE_TODO_TITLE_FAILURE } from '../actions/todoActions';

const initialState = {
  todos: [],
  error: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        error: null
      };
    case FETCH_TODOS_FAILURE:
    case CREATE_TODO_FAILURE:
    case UPDATE_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
    case UPDATE_TODO_TITLE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        error: null
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo),
        error: null
      };
      case UPDATE_TODO_TITLE_SUCCESS:
        const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
        const updatedTodos = [...state.todos];
        updatedTodos[updatedTodoIndex] = action.payload;
        return {
          ...state,
          todos: updatedTodos,
          error: null
        };  
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        error: null
      };
    default:
      return state;
  }
};

export default todoReducer;
