import React, { memo } from 'react'
import Person from './Person';


type Person = {
  id: number,
  name: string
}

interface People {
  people: Person[],
  remove: (id: number) => void
}

function List({ people, remove }: People) {
  return (
    <div>
      {people.map((person) => {
        return (
          // <div style={{display: 'flex', gap: '10px', marginBottom: '5px'}}>
            <Person key={person.id} remove={remove} {...person} />
            //* <button className='btn' onClick={(id) => remove(person.id)}>-</button> */}
          // </div>
        )
      })}
    </div>
  );
};

export default memo(List);