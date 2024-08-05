import React from 'react'
import logo from "./logo.png";
import './Navbar.css';

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
    <div className="container">
      <div className="navbar-content">
        <div className="logo-and-links">
          <img src={logo} alt="Logo" className="logo" />
          <div className="dashboard-link">
            <a href="#" className="dashboard-text">Dashboard</a>
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