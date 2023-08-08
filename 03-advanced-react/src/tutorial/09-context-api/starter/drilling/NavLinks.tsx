import React from 'react'
import UserContainer from './UserContainer'

interface NavLinkProps {
  user: {name: string} | null,
  logOut: () => void;
}

export default function NavLinks({user, logOut}: NavLinkProps) {
  return (
    <div>
      <UserContainer user={user} logOut={logOut}/>
    </div>
  )
}
