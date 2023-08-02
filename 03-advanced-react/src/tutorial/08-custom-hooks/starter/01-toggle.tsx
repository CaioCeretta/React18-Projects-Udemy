import React, { useEffect } from 'react';
import useToggle from './useToggle';

const ToggleExample = () => {
  const {show, toggle} = useToggle(true);

  useEffect(() => {
    console.log(show);
  }, [show])

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
