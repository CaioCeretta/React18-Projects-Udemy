import React, { useEffect, useState } from "react";

export default function MultipleReturnsBasics() {
  const [user, setUser] = useState<any>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
      const resp = await fetch(
        "https://api.github.com/users/QuincyLarson"
      ).then((result) => result.json());

      if(!resp.ok) {
        setUser(resp);
        return;
      }
      } catch(err) {
        setIsError(true);
        console.log(err);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      //done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an Error...</h2>;
  }

  

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {isError && <p>An error occured</p>}

      <h1>Fetch Data</h1>
      <img
        style={{ borderRadius: "5%", width: "150" }}
        src={user.avatar_url}
        alt="User Name"
      />
      <h1>{user.login}</h1>
      <h2>Works at {user.company}</h2>
      <h2>{user.bio}</h2>
    </div>
  );
}
