import {useState} from 'react';

import classes from './CalculateForm.module.css'

function CalculateForm({
  onCalculate
}) {

  const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10,
  };

  const [data, setData] = useState(initialUserInput);

  const inputChangeHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
      [event.target.id]: event.target.value
      }
    })
  }

  const resetHandler = (event) => {
    event.preventDefault();

    setData(initialUserInput)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onCalculate(data);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input value={data['current-savings']} onChange={inputChangeHandler} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input value={data['yearly-contribution']} onChange={inputChangeHandler} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input value={data['expected-return']} onChange={inputChangeHandler} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input value={data['duration']} onChange={inputChangeHandler} type="number" id="duration" />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}
export default CalculateForm;