import React, { useState } from 'react';


export default function Practice() {
  const [{count1,count2}, setCount] = useState({count1:10, count2:20})
  return (
    <div>
      <button onClick={() => {
        setCount(c => ({
          ...c,
          count1: c.count1 + 1,
          count2: c.count2 + 2
        }))
      }} >
        +
      </button>

      <div>Increment by 1 : {count1}</div>
      <div>Increment by 2 :  {count2}</div>
    </div>
  )
}
