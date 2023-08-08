import React, { createContext, useState } from 'react';
import NavLinks from './NavLinks';
import { useContext } from 'react';

type User = {
  name: string | null;
};

type ContextValue = {
  user: User | null; // Update the type to allow null
  logOut: () => void;
};

export const NavbarContext = createContext<ContextValue>({
  user: { name: 'claudio'},
  logOut: () => {},
});

//custom hook

export const useAppContext = () => {
  return useContext(NavbarContext);
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>({ name: 'claudio' }); // Set initial state to null

  const logOut = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logOut }}>
      <h5>CONTEXT API</h5>
      <NavLinks />
    </NavbarContext.Provider>
  );
}