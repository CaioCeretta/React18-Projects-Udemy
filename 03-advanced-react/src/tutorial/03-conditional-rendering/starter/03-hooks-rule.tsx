import React, { useState, useEffect } from 'react';

//Basically what this is saying is to not use an conditional function on a state


const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // won't work
    const [state, setState] = useState(false);
  }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  useEffect(() => {
    console.log('hello there');
  }, []);
  
  return <h2>example</h2>;
};

export default Example;
