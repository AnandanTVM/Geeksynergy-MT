import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div>
      {/* <nav classNameName="navbar navbar-expand-lg navbar-dark  bg-primary"> */}

      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/adminHome">
            Geeksynergy Technologies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                {props.home ? (
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                ) : (
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.home ? (
                  <Link className="nav-link active" to="/">
                    Signup
                  </Link>
                ) : (
                  <Link className="nav-link" to="/">
                    Signup
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.CLogin ? (
                  <Link className="nav-link active" to="/client/Login">
                    Client Login
                  </Link>
                ) : (
                  <Link className="nav-link" to="/client/Login">
                    Client Login
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.admin?(<Link className="nav-link active" to="/admin/login">
                  Admin Login
                </Link>):(<Link className="nav-link" to="/admin/login">
                  Admin Login
                </Link>)}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
