import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';
import { Square } from './Square';

export default function Test() {
  const [count, setCount] = useState(0);
  const favouriteNums = [7, 21, 37];

  // whenever count/setCount changes this function will be recreated
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);
  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>

    </div>
  );
}
