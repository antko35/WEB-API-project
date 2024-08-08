import React from 'react'
import logo from "./logo.png";
import './Navbar.css';
import { Link } from 'react-router-dom';

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
    <div className="container">
      <div className="navbar-content">
        <div className="logo-and-links">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <div className="dashboard-link">
            <Link to="/search" className="dashboard-text">
              Search
            </Link>
          </div>
        </div>
        <div className="auth-links">
          <div className="login-text">Login</div>
                <a href="#" className="signup-button">Signup</a>
         </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar