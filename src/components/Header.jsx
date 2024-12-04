import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Header() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/all-visas">All Visas</Link></li>
              <li><Link to="/add-visa">Add Visa</Link></li>
              <li><Link to="/my-added-visas">My Added Visas</Link></li>
              <li><Link to="/my-visa-applications">My Visa Applications</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Your Website Name</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-visas">All Visas</Link></li>
            <li><Link to="/add-visa">Add Visa</Link></li>
            <li><Link to="/my-added-visas">My Added Visas</Link></li>
            <li><Link to="/my-visa-applications">My Visa Applications</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/add-visa" className="btn">Add Visa</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;