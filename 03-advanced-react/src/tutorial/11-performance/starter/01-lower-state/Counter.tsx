

import React, {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
    className="btn"
    onClick={() => setCount(prev => prev + 1)}
    style={{marginBottom: '1rem'}}
  >
    {count}
  </button>  )
}
