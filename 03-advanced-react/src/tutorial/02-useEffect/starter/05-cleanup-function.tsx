import React, { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>

      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  // useEffect(() => {
  //   console.log('hmm, this is interesting')
  //   const intId = setInterval(() => {
  //     console.log('Hello from interval');
  //   }, 1000)

  //   return () => {
  //     clearTimeout(intId)
  //     console.log('cleanup')
  //   }
  // },

    /* In the useEffect above it will always increase the number of intervals in the more i click on it, so a cleanup is
  needed, the useEffect return happens when another useEffect will run or if the component is unmounted */

  useEffect(() => {
    const someFunc = () => {
      //some logic
    }

    window.addEventListener('scroll', someFunc)

    return () => {
      window.removeEventListener('scroll', someFunc);
    }
  }, [])


  return (<div>Simple Component</div>);
};

export default CleanupFunction;
