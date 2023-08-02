import React, { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("k");
  // truthy
  const [name, setName] = useState("Jurandir");
  const [user, setUser] = useState({ name: "Roberval" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* <h2>{text || "default"}</h2>{" "} */}
      {/*In this case, if the first one doesn't exist, it prints the next one} */}
      {/* <h2>{name || "default"}</h2>{" "} */}
      {/*In this case, if the first one exist, it prints it} */}
      {/* {text && (
        <div>
          <h2>Whathever Return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {/* Doesn't display anything cause the first evaluated to false, but if we add a value to text
        it will return the div*/}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{margin: '1rem 0'}}>Ternary Operator</h2>
      <button className="btn" onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Edit' : 'Add'}</button>
      {user ? <div>
          <h4>Hello there {user.name}</h4>
        </div> : 'You need to log in'}
    </div>
  );
};

const SomeComponent = ({ name }: { name: string }) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
