import React, { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react'
import {data} from '../../../data'

type Data = {
  id: number,
  name: string
}

const UserChallenge = () => {

const [name, setName] = useState('');
const [users, setUsers] = useState<Data[]>(data)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(name === '') {
      return;
    }
    

    setUsers([...users, {id: users.length, name: name}])

    setName('');

  }

  function removeUser(userId: number) {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-input' id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      
        <h4>Users</h4>
        {users.map((user: any) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <button className="btn" onClick={() => removeUser(user.id)} >Remove User</button>
            </div>
          )
        })}

      </div>
      
      

  );
};
export default UserChallenge;
