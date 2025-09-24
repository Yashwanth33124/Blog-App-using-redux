import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    console.log('Current count:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={logCount}>Log Count</button>
    </div>
  );
}

export default Counter;