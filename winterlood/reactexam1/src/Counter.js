import { useState } from "react";
import OddEvenResult from "./OddEventResult";

function Counter({initialValue}) {
  const [num, setNum] = useState(initialValue);
  const handleAddNum = () => {
    setNum(num + 1);
  }
  const handleMinusNum = () => {
    setNum(num - 1);
  }
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={handleAddNum}>+</button>
      <button onClick={handleMinusNum}>-</button>
      <OddEvenResult count={num}/>
    </div>

  )
}
Counter.defaultProps = {
  initialValue: 0
}
export default Counter;