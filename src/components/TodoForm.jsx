import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, postTodo } from "../store/todo/todoThunk";
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
        <div>
          <select value={selectValue} onChange={selectChangeHandler}>
            <option value="All">All</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <button type="submit">ADD</button>
        </div>
      </form>
    </Container>
  );
};
const Container = styled.div`
  form {
    text-align: center;
    input {
      width: 400px;
      height: 40px;
      border: 0;
      border-radius: 22px;
      text-align: center;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
      button {
        width: 100px;
        height: 30px;
        border-radius: 12px;
        font-size: 17px;
        border: 0;
        transition: 0.1s;
        &:hover {
          font-size: 20px;
          font-weight: 800;
        }
        &:active {
          background-color: #7c7676;
        }
      }
      select {
        width: 100px;
        height: 30px;
        font-size: 17px;
        border-radius: 12px;
        text-align: center;
      }
    }
  }
`;
