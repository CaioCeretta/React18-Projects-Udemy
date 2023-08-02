import React, { useEffect, useState } from "react";
import User from "./04-users";

const url = 'https://api.github.com/users';

interface GitHubUser {
  avatar_url: string;
  login: string;
  id: number;
}

const FetchData = () => {
  const [users, setUsers] = useState<GitHubUser[]>([])

  
  useEffect(() => {
    async function getUsers() {
      try {
      const result = await fetch(url)
      .then(response =>  response.json())
      .then(data => {
        const slicedData = data.slice(0, 10)

        return slicedData;
      })
      
      console.log(result)
      
      setUsers(result)
    } catch(err: any) {
      console.log(err)
    }

} 
  getUsers();

  }, [])


  return (
    <>
      <h2>fetch data example</h2>
      {users.map(user => {
        return (
          <User key={user.id} login={user.login} />
        )
      })}
    </>
  );

};
export default FetchData;
