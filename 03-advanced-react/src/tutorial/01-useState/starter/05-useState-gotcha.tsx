import React, { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setTimeout(() => {
      console.log('clicked the button')
      setCount(prev => prev + 1);
    }, 3000)
  }

  return (
    <>
      <h2>useState "gotcha"</h2>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </>
  );
};

export default UseStateGotcha;
