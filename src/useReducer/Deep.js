import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD-TODO':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
  }
}

export default function Deep() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'ADD-TODO', text });
          setText('');
        }}
      >
        <input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>
      {todos.map((t, i) => (
        <div key={t.text}>{t.text}</div>
      ))}
    </div>
  );
}
