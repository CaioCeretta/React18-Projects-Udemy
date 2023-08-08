import React, { FormEvent, useState } from 'react'
import Input from './Input';

export default function Form({ addPerson }: { addPerson: (name: string) => void }) {
  const [name, setName] = useState('');

  function fnOnChange(name: string) {
    setName(name);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      alert('Please Provide Name Value');
      return;
    }
    addPerson(name);
    setName('');
  };


  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input type="text" fnOnChange={(name) => fnOnChange(name)} name="name" />
      <button className='btn btn-block' type='submit'>
        submit
      </button>
    </form>)
}
