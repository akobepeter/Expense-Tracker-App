import React, { useContext } from "react";
import { Context } from "../Context";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const [transactions,setTransactions] = useContext(Context);

  return (
    <div>
      <h2>History</h2>
      <ul id="list" className="list">
        {transactions.map((transaction,id) => {
          return (
            <Transaction id={id} key={transactions.id} transaction={transaction} />
          );
        })}
      </ul>
    </div>
  );
};
