
import React, { useCallback, useMemo, useState } from "react";
import { data } from "../../../../data"; 
import List from './List';
import Counter from "./Counter";
import slowFunction from "./Slow";

export default function LowerState() {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0);
  

  const value = useMemo(() => slowFunction(), []);

  console.log(value);

  const removePerson = useCallback((id: any) => {
    console.log(people)
    const newPeople = people.filter(p => p.id !== id)
    setPeople(newPeople)
  }, [people])

  
  return (
    <section>
      <button
     className="btn"
     onClick={() => setCount(prev => prev + 1)}
     style={{marginBottom: '1rem'}}
    >{count}</button>
      <List people={people} remove={removePerson} />
    </section>
  )
}