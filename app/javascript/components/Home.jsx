// app/javascript/components/Home.jsx
import React,{useState, useReducer} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const initialState = {count: 0};
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1}
      default:
        throw new Error();
    }
  }
const Home = ({ message }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
       <h5>{message}</h5>
        <p><Link to="/todoss">Todo list</Link></p>
        <p><Link to="/todo">Todo-useCallback</Link></p>
        <p><Link to="/memouse">Todo-useMemo</Link></p>
        <p><Link to="/refuse">Todo-useRef</Link></p>
        <p><Link to="/useimperativehandle">Todo-useImperativeHandle</Link></p>
        <p><Link to="/uselayouteffect">Todo-layout</Link></p>
        <p><Link to="/usedebugvalue">Todo-useDebug value</Link></p>
        <h4>use of useReducer</h4>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.home.message
  };
};

export default connect(mapStateToProps)(Home);