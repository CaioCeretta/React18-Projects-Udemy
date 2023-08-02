import React, { ChangeEvent } from "react";

import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e: ChangeEvent<HTMLInputElement>) => {
    setShipping(e.target.checked);
  };

  const handleFramework = (e: ChangeEvent<HTMLSelectElement>) => {
    setFramework(e.target.value);
  };

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={handleShipping}
            checked={shipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            value={framework}
            onChange={handleFramework}
            name="framework"
            id="framework"
          >
            {frameworks.map((framework) => (
              <option key={framework} value={framework}>
                {framework}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
