import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import useFetch from '../UseRef/useFetch';
import useMeasure from './useMeasure';

export default function Hi() {
  // const renders = useRef(0);
  // console.log(`hello renders: `, renders.current++);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count')),
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // now everytime the count changes its going to set the count into localStorage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  // const [rect, setRect] = useState({});
  // const divRef = useRef();

  // everytime we get new data from api we get the size of this div
  // useLayoutEffect(() => {
  //   setRect(divRef.current.getBoundingClientRect());
  // }, [data]);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{!data ? 'loading.....' : data}</div>
      </div>

      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count} </div>
      <div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    </div>
  );
}
