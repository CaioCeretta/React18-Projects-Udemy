import avatar from '../../../assets/default-avatar.svg'
import React from "react";

interface Person {
  person: {
    id: number;
    name: string;
    nickName?: string; // Optional property
    images?: {
      small: {
        url: string;
      };
    }[];
  };
}



export default function Person({ person }: Person) {
  // const img = person.images && person.images[0] && person.images[0].small && person.images[0].small.url;

  const img = person.images?.[0]?.small?.url || avatar;




  // if(person.images) {
  //   img = person.images[0].small.url
  // } else {
  //   img = 'https://picsum.photos/200/300'
  // }

  return (
    <div>
      <img src={img} alt={person.name} style={{width: '50px'}} />
      <h2>{person.name}</h2>
      <p>Nickname: {person.nickName || 'cocô'} </p>
    </div>
  );
}
