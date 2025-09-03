'use client'
import React,{useState} from 'react'

export default function CounterPage() {
  const [count, setCount] = useState(10);
  return (
    <div>
      Count is: {count}
      <br/>
      <button type="button" onClick={() => setCount(count+1)}
        className='bg-blue-500 text-white px-4 py-2 rounded'>Increment</button>
    </div>
  )
}
