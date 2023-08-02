import React, { useState } from "react";

interface PersonProps {
  age: number;
  name: string;
  hobby: string;
}

function UseStateObject() {
  const [person, setPerson] = useState<PersonProps>({name: 'John', age: 28, hobby: 'Bater uma bolinha'});

  function handlePersonChange() {
    setPerson(prev => prev.name === 'Peter' ? {...prev, name: 'John' } : {...prev, name: 'Peter'})
  }


  return (
    <>
      <h2>useState object example</h2>
      <h1>{person.name}</h1>
      <button onClick={() => handlePersonChange()}>{person.name === 'Peter' ? 'Change name to John' : 'Change Name to Peter'}</button>
    </>
  );
}

export default UseStateObject;
