import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" value={fName} />
        <input name="lName" placeholder="Last Name" valuer={lName/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
