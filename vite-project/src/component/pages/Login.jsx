import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login({ closeLogin }) {
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState({ userName: '', password: '' });

  const handleInputChange = (e, name) => {
    setLoginField({ ...loginField, [name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/login', loginField, {
        withCredentials: true,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userid', response.data.user._id);
      localStorage.setItem('userName', response.data.user.userName);

      toast.success('Login successful!');
      closeLogin();
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    closeLogin(); // just close the modal
  };

  const handleSignup = (e) => {
    e.preventDefault();
    closeLogin(); // hide modal first
    navigate('/signup'); // then navigate
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube Logo"
          className="login-logo"
        />
        <h2>Sign in</h2>
        <p className="login-subtext">to continue to YouTube</p>

        <form className="login-form">
          <input
            type="text"
            placeholder="User Name"
            required
            value={loginField.userName}
            onChange={(e) => handleInputChange(e, "userName")}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={loginField.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <button className="login-btn" onClick={handleLogin}>Login</button>
          <button className="login-btn" onClick={handleCancel}>Cancel</button>

          <div className="login-footer" onClick={handleSignup}>
            <p>New to YouTube? <span className="signup-link">Create account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
