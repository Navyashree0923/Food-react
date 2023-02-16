import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search here.." title="Type in a name"></input>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
