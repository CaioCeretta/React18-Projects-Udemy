import React, { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

type UserProps = {
  name: string;
  company: string;
  avatar_url: string;
  bio: string
}



export default function useFetch(url: string) {
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  // order matters
  // don't place user JSX before loading or error

  return { isLoading, isError, user }
}

