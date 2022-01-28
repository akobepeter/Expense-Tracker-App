import React, {useState, useContext} from "react";
import { Context } from "../Context";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useContext(Context);

  const updateText = (e) => {
    setText(e.target.value);
  };

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };
  const addTransaction = (e) => {
    e.preventDefault();
    setTransactions((prevtransactions) => [
      ...prevtransactions,
      { id: Math.floor(Math.random() * 10000000), text, amount: +amount },
    ]);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={updateText}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <br />
          (negative - expense, positive - income )
          <input
            type="number"
            value={amount}
            onChange={updateAmount}
            placeholder="Enter amount ..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
