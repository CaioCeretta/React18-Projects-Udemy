import React from 'react'
import Person from './Person'

type Person = {

  id: number;
  image: string;
  name: string;
  age: number;

}

interface ListProps {
  people: Person[];
}

export default function List({ people }: ListProps) {
  return (
      <section>
        {people.map((person: Person) => {
          return <Person key={person.id} {...person}/>
        })}
      </section>
    
  )
}
