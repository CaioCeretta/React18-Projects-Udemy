
import React, { useEffect, useState } from 'react';

function CodeExample () {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);


  // function sayHello() {
  //   console.log('Hello')  
  //   setValue(value + 1)
  // }

  useEffect(() => {
    console.log('Hello from first useEffect');
  }, [value, secondValue])

  useEffect(() => {
    console.log('Hello from second useEffect');
  }, [secondValue])


  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <h1>Second value: {secondValue}</h1>
      <button onClick={() => setSecondValue(secondValue + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
