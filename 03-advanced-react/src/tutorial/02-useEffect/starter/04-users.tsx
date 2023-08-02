import React, { useEffect, useState } from "react";

interface UserProps {
  login: string;
}

type UserType = {
  avatar_url: string;
  login: string;
};

export default function User({ login }: UserProps) {
  const [user, setUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    async function fetchUser() {
      const result = await fetch(`https://api.github.com/users/${login}`).then(
        (response) => response.json()
      );

      setUser(result);
    }

    fetchUser();

    console.log(user);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        width: "30rem",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: "1rem auto",
        backgroundColor: "#d3d3d3",
        borderRadius: '3%',
        padding: "1rem",
      }}
    >
      <div>
        <img
          style={{ maxWidth: "10rem", backgroundSize: "cover" }}
          src={user.avatar_url}
          alt=""
        />
      </div>
      <div>
        <h2>{user.login}</h2>
        <a href="#" style={{fontWeight: 'semibold', textDecoration: 'none'}}>Profile</a>
      </div>
    </div>
  );
}
