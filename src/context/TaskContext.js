import { createContext, useReducer } from "react";

const initialState = {
  posts: [],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload._id),
      };
    default:
     return state;
  }
};

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <TaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
