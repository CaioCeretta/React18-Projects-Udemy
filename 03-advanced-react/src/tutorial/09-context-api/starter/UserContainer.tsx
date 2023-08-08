import React from 'react';
import { useAppContext } from "./Navbar";


export default function UserContainer() {
  const { user, logOut } = useAppContext();
    
  if (user) {
    return (
      <div>
        <div>Hello, {user.name}</div>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  } else {
    return <button>Please sign in</button>;
  }
}