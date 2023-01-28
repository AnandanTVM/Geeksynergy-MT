import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminNav(props) {
    const navigate = useNavigate();
    const logout = () => {
      navigate('/client/login');
      localStorage.removeItem('AdminDetails');
      localStorage.removeItem('Admintoken');
    };
  return (
    <div>
        <div>
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/client/home"
                    >
                      Home
                    </Link>
                  ) : (
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/client/home"
                    >
                      Home
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <button
                    className="navbtn btn btn-primary btn-md"
                    onClick={logout}
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </div>
  )
}

export default AdminNav