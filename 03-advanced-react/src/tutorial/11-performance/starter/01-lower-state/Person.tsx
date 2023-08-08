import React, { useEffect } from 'react';

const Person = ({ name, id, remove }: {name: string, id: number, remove: (id: number) => void
}) => {
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => remove(id)}>-</button>
    </div>
  );
};
export default Person;