import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((income,amount) => (income += amount), 0)
    .toFixed(2);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((expense,amount) => (expense += amount), 0)
    .toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>

      <div>
        <h4>Expenses</h4>
        <p className='money minus'>-${expense}</p>
      </div>
    </div>
  )
}
