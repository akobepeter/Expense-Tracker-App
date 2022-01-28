import React, {useState, createContext} from "react";

export const Context = createContext();

export const TransactionProduct = (props) => {
  const [transactions, setTransactions] = useState([]);

  return (
    <Context.Provider value={[transactions, setTransactions]}>
      {props.children}
    </Context.Provider>
  );
};


