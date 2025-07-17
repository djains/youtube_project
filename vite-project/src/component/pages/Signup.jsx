import React, { useState } from 'react';
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(props) {
  const [signupField, setSignupField] = useState({
    channelName: '',
    userName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleOnChangeInput = (e, name) => {
    setSignupField({
      ...signupField,
      [name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/auth/signup',
        signupField,
        {
          withCredentials: true
        }
      );

      if (response.status === 201) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(
        error.response?.data?.message || "An error occurred during signup"
      );
    }
  };

  return (
    <div className={props.navvisible ? 'sign' : 'without'}>
      <div className="signup-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube Logo"
          className="signup-logo"
        />
        <h2>Create account</h2>
      </div>

      <div className="input-box">
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Channel Name"
            required
            value={signupField.channelName}
            onChange={(e) => handleOnChangeInput(e, 'channelName')}
          />
          <input
            type="text"
            placeholder="User Name"
            required
            value={signupField.userName}
            onChange={(e) => handleOnChangeInput(e, 'userName')}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={signupField.email}
            onChange={(e) => handleOnChangeInput(e, 'email')}
          />
          <input
            type="password"
            placeholder="Create a password"
            required
            value={signupField.password}
            onChange={(e) => handleOnChangeInput(e, 'password')}
          />
          <button type="submit" className="signup-btn">Sign Up</button>
          <div>
            <Link to="/">
              <button type="button" className="signup-btn">HOMEPAGE</button>
            </Link>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
