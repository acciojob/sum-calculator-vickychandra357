
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [inp, setInp] = useState("");
  const [sum, setSum] = useState(0);
  useEffect(()=>{
    setSum(()=> sum+inp);
  },[inp]);

  return (
    <div>
      <h1>Sum Calculator</h1>
        {/* Do not remove the main div */}
        <input type="number" onInput={(e) => setInp(+(e.target.value))}></input>
        <p>Sum: {sum}</p>
    
    </div>
  )
}

export default App;