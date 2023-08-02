import React, { ChangeEvent, FormEvent, useState } from "react";

const defaultUserState = {
  name: "",
  email: "",
  password: "",
};

const MultipleInputs = () => {
  const [user, setUser] = useState(defaultUserState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    setUser({...user, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
      
    </div>
  );


  
};
export default MultipleInputs;
