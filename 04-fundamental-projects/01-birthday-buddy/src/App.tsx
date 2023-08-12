import React, { useState } from 'react'

import data from './data';

import './index.css'
import List from './List';

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
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type='button' className='btn btn-block' onClick={() => setPeople([])}>
        Clear All
      </button>
    </section>
    </main>
  )
};
export default App;
