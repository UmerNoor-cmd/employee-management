import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Employee Management System</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto"> 
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Employee</Link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
