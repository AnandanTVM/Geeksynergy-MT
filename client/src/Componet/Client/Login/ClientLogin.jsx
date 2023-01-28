import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientLogin } from '../../../axios/serives/Homesevrices';
import jwt from 'jwt-decode';

function ClientLogin() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loginUser = async (event) => {
    event.preventDefault();
    const values = { email: email, password: password };
    const data = await clientLogin(values);
    console.log(data);
    if (data.user) {
      console.log(data.user);
      localStorage.setItem('token', data.user);
      const user = jwt(data.user);
      localStorage.setItem('clientrDetails', user.name);

      navigate('/client/home');
    } else {
      setError('Invalid Phone Number/Password..');
    }
  };

  return (
    <div>
      <div>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={
                    'https://www.kindpng.com/picc/m/112-1128323_software-developmet-project-management-hd-png-download.png'
                  }
                  className="img-fluid"
                  alt={'Sample '}
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={loginUser}>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Welcome Client
                    </p>
                  </div>
                  {error ? (
                    <p
                      style={{ color: 'red' }}
                      className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4"
                    >
                      {error}
                    </p>
                  ) : (
                    ' '
                  )}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClientLogin;
