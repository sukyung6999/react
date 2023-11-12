import React, { useState } from "react";
import TemperatureInput from "./practice";

function BoilingState(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다</p>
  } else {
    return <p>물이 끓지 않습니다</p>
  }
}

function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
  
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const CelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  }

  const FahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature; 
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature; 

  return(
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        TemperatureInputChange={CelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        TemperatureInputChange={FahrenheitChange}
      />
      <BoilingState celsius={celsius}/>
    </div>
  )
}

export default Calculator;
