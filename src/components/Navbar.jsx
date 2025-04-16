import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Smart Event</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Dashboard</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
