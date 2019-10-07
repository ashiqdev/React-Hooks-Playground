import React, { useState } from 'react';
import {useForm} from './FormHook';

export default function Test() {
  const [values, handleChange] = useForm({ email: '', password: '' });
  return <div>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" value={values.email} onChange={handleChange}/>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" value={values.password} onChange={handleChange}/>
  </div>;
}
