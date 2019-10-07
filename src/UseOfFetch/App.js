import React, { useState } from 'react';
// useFetch, fetch the data from the url, and set it to the state
import useFetch from '../UseRef/useFetch';

export default function App() {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const computeLongestWord = (arr) => {
    if (!arr) {
      return [];
    }
    console.log('computing longest word');
    let longestWord = '';

    // split gives us array of words, and then loop over using each word

    data.forEach(object =>
      object.title.split(' ').forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      }),
    );

    return longestWord;
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <div>{computeLongestWord(data)}</div>
    </div>
  );
}
