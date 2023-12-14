import { createContext, useState } from "react";

export const QuerieContext = createContext();

export const QuerieProvider = (props) => {
  const [query, setQuery] = useState("");

  return (
    <QuerieContext.Provider value={{ query, setQuery }}>
      {props.children}
    </QuerieContext.Provider>
  );
};
