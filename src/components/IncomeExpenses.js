import React,{useContext} from 'react';
import { Context } from '../Context';

export const IncomeExpenses = () => {
  const [transactions,setTransactions] = useContext(Context);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item =>item > 0).reduce((acc,item)=>(acc+=item),0).toFixed(2);

  const expense = amounts.filter(item => item < 0).reduce((acc,item)=>(acc+=item),0) * -1;


  return(
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>${income}</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p className='money minus'>${expense}</p>
        </div>
    </div>
  );
};
