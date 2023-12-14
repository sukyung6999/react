import {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
  const [wantToAdd, setWantToAdd] = useState(false);
  const toggleBtn = () => setWantToAdd((preveBtn) => !preveBtn);

  const onSaveExpenses = (expense) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expense
    }
    props.onAddExpense(newExpense);
  }
  return (
    <div className='new-expense'>
      {
        wantToAdd ?
        <ExpenseForm onAddHandler={onSaveExpenses} onCancel={toggleBtn} /> :
        <button onClick={toggleBtn}>Add Expense</button>
      }
    </div>
  )
}
export default NewExpense;