import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>have fun</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Counter
