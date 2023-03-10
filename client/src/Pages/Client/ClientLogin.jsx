import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { CLogin, Nav } from '../../Componet';

export default function ClientLogin() {
  const navigate = useNavigate('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);

      console.log(user);
      console.log(token);
      if (user) {
        navigate('/client/home');
      }
    } else {
      navigate('/client/login');
    }
  }, [navigate]);
  return (
    <div>
      <Nav CLogin />
      <CLogin />
    </div>
  );
}
