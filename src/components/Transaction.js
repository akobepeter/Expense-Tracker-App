import React,{useContext} from "react";
import {Context} from '../Context';

export const Transaction = ({id, transaction}) => {
    const [transactions,setTransactions] = useContext(Context);

    const deleteTransaction = () =>{
      const newtransactions = [...transactions];
      newtransactions.splice(id,1);
      setTransactions(newtransactions);
      
    }

    const sign = transaction.amount < 0 ? '-' : '+';
    

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={deleteTransaction}>x</button>
      </li>
    </div>
  );
};

// ()=>deleteTransaction(props.transaction.id)
