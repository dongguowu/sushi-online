import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-bg-sushi">Sushi Online</h1>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder=".form-control-lg"
        aria-label=".form-control-lg example"
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
