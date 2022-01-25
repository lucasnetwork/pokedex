import React, { createContext, useContext, useState } from "react";

interface contextProps {
  search: string;
  updateSearch: (value: string) => void;
}

const Context = createContext({} as contextProps);

export const ContextProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState("");

  function updateSearch(value: string) {
    setSearch(value);
  }

  return (
    <Context.Provider value={{ search, updateSearch }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);
