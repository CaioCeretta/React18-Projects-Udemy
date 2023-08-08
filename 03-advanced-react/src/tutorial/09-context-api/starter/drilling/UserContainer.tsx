import React from 'react'

interface UserProps {
  user: { name: string } | null,
  logOut: () => void;
}

export default function UserContainer({ user, logOut }: UserProps) {
  

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user.name}</p>

          <button className="btn" onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <p>Please, login</p>
      )}
    </div>
  )
}
//   if(user) {
//     return (
//       <div>
//         <div>Hello, {user.name}</div>
//         <button onClick={logOut}>Log Out</button>
//       </div>
//     )
//   } else {
//     return <button>Please sign in</button>
//   }
// }

  // return user ? (
  //   <div>
  //     <p>Hello there, {user?.name}</p>
  //     <button onClick={logOut}>Click here to logout</button>
  //   </div>
  // ) : (
  //   <p>Please log in</p>
  // )
// }e
