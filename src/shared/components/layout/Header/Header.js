import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header>
    <div>
      <h1>Pomodoro App</h1>
    </div>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
