import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, postTodo } from "../store/todo/todoThunk";
import { TodoList } from "./TodoList";
import styled from "styled-components";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { selectValue } = useSelector((state) => state.todo);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      const data = {
        title: value,
        completed: false,
        edit: false,
      };
      dispatch(postTodo(data));
    }
    setValue("");
  };
  const selectChangeHandler = (e) => {
    dispatch({ type: "ALL", payload: e.target.value });
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">ADD</button>
        <div>
          <select value={selectValue} onChange={selectChangeHandler}>
            <option value="All">All</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      </form>
      <TodoList />
    </Container>
  );
};
const Container = styled.div`
  padding: 30px;
  background-color: #11100e8f;
  margin-top: 30px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    input {
      width: 400px;
      height: 40px;
      border-radius: 6px;
      padding-left: 20px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
    }
    select {
      width: 100px;
      height: 30px;
      font-size: 17px;
      border-radius: 12px;
      text-align: center;
      margin-bottom: 17px;
    }
    button {
      width: 120px;
      height: 40px;
      border-radius: 12px;
      font-size: 17px;
      transition: 0.1s;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border: 2px dashed #fff;

      &:hover {
        font-size: 20px;
        font-weight: 800;
        color: #fff;
        border: 2px solid #fff;
      }
    }
  }
`;
