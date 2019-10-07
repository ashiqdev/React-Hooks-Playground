import React, { useReducer } from 'react';

// in this function I will read what the action is and I will change it accordengly
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>count: {count}</div>
      {/* whatever I pass into dispatch function is refers to the `action` of the reducer function */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
