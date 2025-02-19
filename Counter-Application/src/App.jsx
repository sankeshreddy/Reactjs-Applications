import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1>Counter Application</h1>
      <div className="card">
        <p className="counter-value">{count}</p>
        <div className="button-container">
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
          <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
