import React from 'react'

import useFetch from './useFetch';
const url = 'https://api.github.com/users/QuincyLarson';

type UserProps = {
  name: string;
  company: string;
  avatar_url: string;
  bio: string
}


const FetchData = () => {

  const { user, isError, isLoading } = useFetch('https://api.github.com/users/CaioCeretta');


  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  if(!user) {
    return <div> No user was found</div>;
  }

  return (
    <div>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default FetchData;
