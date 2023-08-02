import React, { ChangeEvent, FormEvent, useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  // function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   // console.log(e.target.name);
  //   // console.log(e.target.value);
  //   setName(e.target.value);
  // }

  /* Letting this on here just so i remember the type of a event change */

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          value={name}
          className="form-input"
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={email}
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
