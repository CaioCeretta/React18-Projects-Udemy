import React, { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false)



  return (
    <div>
    <button onClick={() => setToggle(!toggle)}>Toggle</button>

    {toggle && (
      <Alert />
    )}

    </div>


  );
};

const Alert = () => {
  return (
    <div>
      Toggle is true, so alert is rendered: {alert('bababoi')}
    </div>
  )
}

export default ToggleChallenge;
