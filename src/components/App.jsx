import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({});

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName}
        {/* {lName} */}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          // onChange={updateLName}
          placeholder="Last Name"
          // value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
