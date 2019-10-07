// useRef => storing a reference to a component
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Hello from './Hi';
import { useForm } from '../UseForm';
import useMeasure from './useMeasure';

export default function Test() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  const inputRef = useRef();
  const hodyRef = useRef(() => console.log('hello'));

  const [showHello, setShowHello] = useState(true);

  // useLayoutEffect(() => {
  //   // getBoundingClietRect gives you the dimention of the component
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);

  // http://numbersapi.com/43/trivia

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

  const [rect, inputRef2] = useMeasure([]);
  return (
    <>
      <div>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          ref={inputRef}
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
          ref={inputRef2}
          type='text'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={() => {
          inputRef.current.focus();
          hodyRef.current();
        }}
      >
        focus
      </button>
    </>
  );
}
