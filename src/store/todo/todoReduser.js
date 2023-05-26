export const ActionTypeTodo = {
  GET_TODO: "GET_TODO",
};

const initialState = {
  items: null,
  selectValue: "All",
};

export const todoReduser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeTodo.GET_TODO: {
      if (state.selectValue === "All") {
        return {
          ...state,
          items: action.payload,
        };
      }
      if (state.selectValue === "True") {
        return {
          ...state,
          items: action.payload.filter((el) => el.completed === true),
        };
      }
      if (state.selectValue === "False") {
        return {
          ...state,
          items: action.payload.filter((el) => el.completed === false),
        };
      }
    }
    case "ALL":
      return {
        ...state,
        selectValue: action.payload,
      };
    default:
      return state;
  }
};
