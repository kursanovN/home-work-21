import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  putCompletedTodo,
  putSaveTodo,
} from "../store/todo/todoThunk";
import styled from "styled-components";

export const TodoList = () => {
  const { items } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const completedHandler = (data) => {
    const result = {
      ...data,
      completed: !data.completed,
    };
    dispatch(putCompletedTodo(result));
  };
  const editSaveHandler = (data, title) => {
    const result = {
      ...data,
      title: title,
    };
    dispatch(putSaveTodo(result));
  };
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  return (
    <Container>
      {items?.map((el) => (
        <TodoItem
          key={el.id}
          el={el}
          completedHandler={completedHandler}
          editSaveHandler={editSaveHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
