import React, { useState } from "react";
import styled from "styled-components";

export const TodoItem = ({
  el,
  completedHandler,
  editSaveHandler,
  deleteHandler,
}) => {
  const [update, setUpdate] = useState(el.title);
  const [open, setOpen] = useState(false);

  const editHandler = () => {
    setOpen(true);
  };
  const saveHandler = (e) => {
    e.preventDefault();
    editSaveHandler(el, update);
    setOpen(false);
  };

  return (
    <Container>
      {open ? (
        <form onSubmit={saveHandler}>
          <input
            type="text"
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
          />
          <button type="submit">SAVE</button>
        </form>
      ) : (
        <>
          <h1
            style={
              el.completed
                ? { textDecoration: "line-through", color: "#00000053" }
                : null
            }
          >
            {el.title}
          </h1>
          <button onClick={() => editHandler(el)}>EDIT</button>
        </>
      )}
      <button onClick={() => deleteHandler(el.id)}>DELETE</button>
      <Checkbox type="checkbox" onClick={() => completedHandler(el)} />
    </Container>
  );
};
const Container = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 12px;
  padding: 10px;
  button {
    width: 100px;
    height: 35px;
    border-radius: 12px;
    border: 0;
    background-color: #474141;
    color: #fff;
    font-size: 17px;
    margin: 10px;
  }
`
const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`