import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { ClientDetails, ClientMav } from '../../Componet';

function ClientHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      console.log(user);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/client/login');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/client/login');
    }
  }, [navigate]);
  return (
    <div>
      <ClientMav />
      <ClientDetails />
    </div>
  );
}

export default ClientHome;
