import React, { useState } from 'react';
import {useForm} from './UseForm';

const App = () => {
  const [values, handleChange] = useForm({email: "", password: ""})
  return (
    <div>
      <input
        name='email'
        type='email'
        value= {values.email}
        onChange={handleChange}
      />
      <input
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
