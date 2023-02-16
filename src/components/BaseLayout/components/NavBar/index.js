import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-materialize';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <right><NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink></right>
    </div>
  </nav>
);

export default Navbar;

