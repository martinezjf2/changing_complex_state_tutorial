import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  return (
    <div className="container">
      <h1>Hello {fName}</h1>
      <form>
        <input name="fName" placeholder="First Name" value={fName} />
        <input name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
