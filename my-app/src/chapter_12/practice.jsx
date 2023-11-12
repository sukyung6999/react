import React from "react";

function TemperatureInput(props) {
  const scaleNames = {
    c: '섭씨',
    f: '화씨'
  }

  const HandleChange = (event) => {
    props.TemperatureInputChange(event.target.value);
  }

  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위: ${scaleNames[props.scale]})</legend>
      <label htmlFor="">
        <input type="text" value={props.temperature} onChange={HandleChange} />
      </label>
    </fieldset>
  )
}

export default TemperatureInput;