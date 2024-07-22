// app/javascript/routes/index.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Home from "../components/Home";
import TodoList from "../components/TodoList";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import TodoEditForm from "../components/TodoEditForm";
import Memouse from "../components/Memouse";
import Refuse from "../components/Refuse";
import Useimperativehandle from "../components/Useimperativehandle";
import Uselayouteffect from "../components/Uselayouteffect";
import Usedebugvalue from "../components/Usedebugvalue";

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todoss" element={<TodoList />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/addtodo" element={<TodoForm />} />
          <Route path="/edittodo" element={<TodoEditForm />} />
          <Route path="/memouse" element={<Memouse />} />
          <Route path="/refuse" element={<Refuse />} />
          <Route path="/useimperativehandle" element={<Useimperativehandle />} />
          <Route path="/uselayouteffect" element={<Uselayouteffect />} />
          <Route path="/usedebugvalue" element={<Usedebugvalue />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default AppRoutes;
