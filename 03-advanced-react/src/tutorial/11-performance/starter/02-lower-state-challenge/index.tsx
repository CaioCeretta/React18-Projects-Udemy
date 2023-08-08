import React from 'react';
import { FormEvent, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Input from './Input';
import Form from './Form';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);



  const addPerson = (name: string) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  const removePerson = (id: any) => {
    const newPeople = people.filter(p => p.id !== id)
    setPeople(newPeople)
  }

  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} remove={removePerson}/>
    </section>
  );
};
export default LowerStateChallenge;
