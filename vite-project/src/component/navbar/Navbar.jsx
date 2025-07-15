import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import Login from "../pages/Login";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Navbar(props) {
  const navigate = useNavigate();
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [userpic] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");
  const [navOptionVisible, setNavOptionVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const userid = localStorage.getItem('userid');
    setIsLoggedIn(!!userid);
  }, []);

  const handleProfileClick = () => {
    const userId = localStorage.getItem('userid');
    if (userId) navigate(`/user/${userId}`);
    setNavOptionVisible(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setNavOptionVisible(false);
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setNavOptionVisible(false);
    navigate('/');
  };

  const toggleNavOption = () => {
    setNavOptionVisible(!navOptionVisible);
  };

  const closeLoginPopup = () => {
    setShowLogin(false);
  };

  return (
    <div className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <MenuIcon className="menu-icon" onClick={props.setnavoption} />
        <Link to="/" className="logo-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="logo"
            className="logo"
          />
          <span className="logo-text">YouTube</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="search-input" />
        <SearchIcon className="search-icon" />
        <MicIcon className="mic-icon" />
      </div>

      {/* Right */}
      <div className="navbar-right">
        <Link to="/123/upload">
          <VideoCallIcon className="video-call-icon" />
        </Link>
        <NotificationsNoneIcon className="notification-icon" />
        <img
          onClick={toggleNavOption}
          src={userpic}
          alt="user"
          className="navbar-right-user"
        />

        {/* Dropdown Options */}
        {navOptionVisible && (
          <div className="navbar-option">
            {isloggedIn && <div className="navbar-option-text" onClick={handleProfileClick}>Profile</div>}
            {!isloggedIn && <div className="navbar-option-text" onClick={handleLoginClick}>Login</div>}
            {isloggedIn && <div className="navbar-option-text" onClick={handleLogoutClick}>Logout</div>}
          </div>
        )}
      </div>

      {/* Login Popup */}
      {showLogin && <Login closeLogin={closeLoginPopup} />}
    </div>
  );
}

export default Navbar;
