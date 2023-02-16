
import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';


const Header = () => (


  <div className="header">
    <h1 id="header-title">TOP RESTURANTS</h1>
    <h2 id="header-title">Shop Now</h2>

    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/empire">EMPIRE  </NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/atria">ATRIA </NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/a2b">A2B</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/mcdonalds">Mc Donalds</NavLink></p>
      
    </div>
    <div>
      </div>
  </div>
)

export default Header;
