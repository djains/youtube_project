import React, { useState, useEffect } from 'react';
import './Profile.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

function Profile(props) {
  const { id } = useParams(); // Get user ID from URL
  const location = useLocation();
  const [data, setData] = useState([]); // video data
  const [user, setUser] = useState(null); // user info
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/api/${id}/channel`)
      .then((response) => {
        setData(response.data);
        setUser(response.data[0]?.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, [id, location.pathname]);

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className={props.navvisible ? 'profile' : 'without'}>
      {/* Banner */}
      <div className="profile__banner"></div>

      {/* Profile Header */}
      <div className="profile__header">
        <img
          src="https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg"
          alt="Profile"
          className="profile__avatar"
        />
        <div className="profile__details">
          <h2 className="profile__name">{user?.userName || "User"}</h2>
          <p className="profile__subscribers">{data.length} videos uploaded</p>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile__tabs">
        <Link to={`/user/${id}`} className="tab active">Home</Link>
        <Link to={`/user/${id}`} className="tab">Videos</Link>
        <Link to={`/user/${id}`} className="tab">About</Link>
      </div>

      {/* Video Grid */}
      <div className="profile__videos-grid">
        {data.map((video) => (
          <Link to={`/watch/${video._id}`} className="profile__video-card" key={video._id}>
            <img
              src={video.thumbnail || "https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg"}
              alt={video.title}
            />
            <div className="profile__video-info">
              <h4>{video.title}</h4>
              <p className="channel-name">{video.user?.channelName}</p>
              <p className="video-views">{video.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Profile;
