import React, { useEffect, useState } from 'react';
import { useForm } from '../UseEffect/FormHook';
import Hello from './Hello';
import useFetch from './useFetch';

export default function Test() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  // const [showHello, setShowHello] = useState(true);

  // http://numbersapi.com/43/trivia

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // now everytime the count changes its going to set the count into localStorage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  // Every time the component will get rendered or re-rendered the function will get called
  // in the second parameter of useEffect you can pass all the values that your affects depends on
  // useEffect(() => {
  //   console.log('render');
  // }, [values.password, values.email]);

  // you can have more than one useEffect on a component and they will fire up in order

  // variations of useEffect

  // this will print render only one time (as like as componentDidMount)
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mouseover', onMouseMove);
  //   // clean up function
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, [values.email]);

  // this will print render when only password field is changed
  // useEffect(() => {
  //   console.log('render');
  // }, [values.password]);

  // useEffect(() => {
  //   console.log('render ashik');

  //   // clean up function
  //   return () => {
  //     console.log('unmount');
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('mount1');
  // }, []);

  // useEffect(() => {
  //   console.log('mount2');
  // }, []);

  return (
    <div>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />} */}
      <div>{!data ? 'loading.....' : data}</div>
      <div>count: {count} </div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />

      <label htmlFor='firstName'>First Name</label>
      <input
        type='text'
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
      />
    </div>
  );
}
