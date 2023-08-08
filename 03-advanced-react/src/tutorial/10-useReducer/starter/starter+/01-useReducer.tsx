import React from 'react';
import { data } from '../../../../data';

type Person = {
  id: number,
  name: string
}

interface People {
  person: Person[];
}

const ReducerBasics = () => {
  const [people, setPeople] = React.useState<Person[]>(data);

  const initialPeople = data;

  const resetPeople = () => {
    setPeople(initialPeople)
  }

  const removeItem = (id: number) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
    {people.length > 0 ? (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
    ): 


    <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetPeople}
      >Reset</button>
      }
    </>
  );
};

export default ReducerBasics;
