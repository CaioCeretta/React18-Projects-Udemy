import React from "react";

type PersonType = {
  id: number,
  name: string
  remove: (id: number) => void;
}

export default function Person({ id, name, remove }: PersonType) {
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <h4>{name}</h4>
      <button className="btn" onClick={() => remove(id)} >-</button>
    </div>
  );
};

