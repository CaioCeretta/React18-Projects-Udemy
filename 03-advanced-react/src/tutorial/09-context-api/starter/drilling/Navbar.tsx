import React, { useState } from 'react'
import NavLinks from './NavLinks'

export default function Navbar() {
  const [user, setUser] = useState<{name: string} | null>({name: 'anything'});

  const logOut = () => {
    setUser(null)
  }

  return (
    <NavLinks user={user} logOut={logOut}/>
  )
}
