import React, { useState } from "react";
export const ContextValue = React.createContext();

const MyContext = (props) => {
  const [activeCharacter, setActiveCharacter] = useState([]);
  const [activeComics, setActiveComics] = useState([]);
  return (
    <ContextValue.Provider
      value={{
        activeCharacter,
        setActiveCharacter,
        activeComics,
        setActiveComics,
      }}
    >
      {props.children}
    </ContextValue.Provider>
  );
};

export default MyContext;
