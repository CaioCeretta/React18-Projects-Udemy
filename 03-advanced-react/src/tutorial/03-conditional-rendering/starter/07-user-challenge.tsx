import React, { useState } from "react";



const UserChallenge = () => {
  const [user, setUser] = useState<{name: string} | null>(null);

  function login() {
    setUser({name: 'Blublublu'});   
  }

  function logout() {
    setUser(null);
  }

  return (
    user ? (
      <h4>Hello, there {user.name}</h4>
    ) : <h4> Please, log in <button onClick={login}>Login</button></h4>
  )
}

export default UserChallenge
