import React from 'react'
import {people} from '../../data';
import Person from '../Person';


interface Person {
  id: number;
  name: string;
  nickName?: string; 
  images?: {
    small: {
      url: string;
    };
  }[];
}

type PersonType = {
  person: Person[]
}


export default function PeopleList() {
  return (
    <div>
      {people.map((person: Person) => (
        
        <div key={person.id}>
          <Person person={person} />
        </div>
      ))}
    </div>
  )
}
