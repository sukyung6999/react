import {useState} from 'react';

import './ExpenseForm.css'

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const inputChangeHandler = (type, value) => {
    if (type === 'title') {
      setEnteredTitle(value);
    } else if (type === 'amount') {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2024-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
