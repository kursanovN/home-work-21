import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { getTodo } from "./store/todo/todoThunk";
import styled from "styled-components";

const AppContent = () => {
  const dispatch = useDispatch();
  const { selectValue } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch, selectValue]);

  return (
    <Container>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #11100e8f;
  margin-top: 30px;
  width: 600px;
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
`