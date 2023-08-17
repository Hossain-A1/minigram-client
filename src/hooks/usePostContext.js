import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
export const usePostContext = () => {

  const context = useContext(TaskContext)
  if (!context) {
    throw new Error(
      "You must call usePostContext inside a PostContextProvider"
    );
  }
  return;
};
