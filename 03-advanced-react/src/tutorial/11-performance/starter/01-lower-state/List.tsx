import React, {memo} from 'react'
import Person from "./Person";

type Person = {
  id: number,
  name: string
}

type People = {
  people: Person[],
  remove: (id: number) => void

}


const List = ({ people, remove }: People) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} remove={remove} {...person} />;
      })}
    </div>
  );
};
export default memo(List);