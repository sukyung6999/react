import {useState} from 'react';

function CalculateForm({
  onCalculate
}) {

  const [data, setData] = useState({
    'current-savings': '',
    'yearly-contribution': '',
    'expected-return': '',
    'duration': '',
  });

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

    setData({
      'current-savings': '',
      'yearly-contribution': '',
      'expected-return': '',
      'duration': '',
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onCalculate(data);
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input value={data['current-savings']} onChange={inputChangeHandler} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input value={data['yearly-contribution']} onChange={inputChangeHandler} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
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
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
}
export default CalculateForm;