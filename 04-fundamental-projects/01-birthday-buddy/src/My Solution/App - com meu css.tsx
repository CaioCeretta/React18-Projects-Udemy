import React, { useState } from 'react'

import data from './data';

console.log(data)

interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

interface People {
  people: Person[]
}

const App = () => {

  const [people, setPeople] = useState<Person[]>(data)

  const clearList = () => {
    setPeople([]);
  }

  return (
    <div style={{padding: '10px 40px', borderRadius: '10px', background: '#fff', margin: '0 auto', width: '500px', position: 'relative', top: '50%', transform: 'translateY(50%)'}}>
      <h4>{people.length} Birthdays Today</h4>
      {people.map(person => (
        <div key={person.id} style={{margin: '0 auto', width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start'}}>
          <div style={{marginTop: '20px', display: 'flex', gap: 20, justifyContent: 'center'}}>
          <div>
            <img style={{width: '50px', height: '50px', borderRadius: '100%'}} src={person.image} alt="" />
          </div>
          <div>
            <p>{person.name}</p>
            <p>{person.age}</p>
          </div>
          </div>
        </div>
      ))}
      <button className='btn' onClick={clearList} style={{width: '100%', borderRadius: '0', marginTop: '10px'}}>Clear All</button>
    </div>
  )
};
export default App;
