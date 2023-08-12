import React from 'react'

export default function Person(person: {id: number, name: string, image: string, age: number}) {
  return (
    <article className='person'>
      <img src={person.image} alt={person.name} className='img' />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </article>
  )
}
