import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Index from './Index';
import About from './About';
import { UserContext } from './UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.provider value='hello from context'>
          <Route path='/' exact component={Index} />
          <Route path='/about' exact component={About} />
        </UserContext.provider>
      </div>
    </BrowserRouter>
  );
}
