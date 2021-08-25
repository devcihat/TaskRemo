import React, { useState,createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [inProgress,setInProgress] = useState([])

  
 

  const val = {
    _inProgress:[inProgress,setInProgress],
    todo:[todos, setTodos],
    
  }

  return (
    <DataContext.Provider value={val}>
      {props.children}
    </DataContext.Provider>
  );
};
