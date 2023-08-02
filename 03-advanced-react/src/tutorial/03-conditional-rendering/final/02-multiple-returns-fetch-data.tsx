import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

interface UserProps {
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        console.log(resp);
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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <div>
      {user ? (
        <div>
          <img
            style={{ width: "150px", borderRadius: "25px" }}
            src={user.avatar_url}
            alt={user.name}
          />
          <h2>{user.name}</h2>
          <h4>works at {user.company}</h4>
          <p>{user.bio}</p>
        </div>
      ) : 
        <h2>User not found</h2>
      }

    </div>
  );
};
export default MultipleReturnsFetchData;
