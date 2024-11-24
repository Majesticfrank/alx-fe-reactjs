import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    login();
    // Redirect to profile after login
    navigate('/profile');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Login Page</h2>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
