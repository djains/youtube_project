import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Videopage.css';

function Videopage(props) {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState(null);
  const [likes, setLikes] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/getvideoById/${id}`)
      .then((response) => {
        setData(response.data);
        setVideoUrl(response?.data?.videoLink);
        setLikes(response?.data?.likes || 0);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });

    getCommentsById();

    const storedUserId = localStorage.getItem("userid");
    setUserId(storedUserId);
  }, [id]);

  const getCommentsById = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/comments/${id}`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("You must be logged in to comment.");
      return;
    }

    if (!message.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    const body = {
      message: message.trim(),
      video: id,
    };

    try {
      await axios.post(`http://localhost:4000/comments/add`, body, { withCredentials: true });
      setMessage('');
      getCommentsById();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
    };

  return (
    <div className={props.navvisible ? 'video' : 'without'}>
      <div className="videopost">
        {/* Left Section */}
        <div className="videocontent">
          {data && (
            <video controls autoPlay muted className="video-player">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <div className="video-details">
            <h2 className="video-title">{data?.title}</h2>
            <p className="video-views">1.2M views • 1 year ago</p>

            <div className="video-actions">
              <button className="action-btn" onClick={handleLike}>👍 {likes}</button>
              <button className="action-btn">👎 {data?.dislike}</button>
              <button className="action-btn">🔗 Share</button>
              <button className="action-btn">💾 Save</button>
            </div>

            <Link to={`/user/${data?.user?._id}`} className="channel-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Channel"
                className="channel-img"
              />
              <div>
                <p className="channel-name">{data?.user?.userName}</p>
                <p className="channel-subs">5.8M subscribers</p>
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </Link>

            <p className="video-description">
              {data?.description || "No description available for this video."}
            </p>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h3>Comments</h3>

            {userId ? (
              <>
                <input
                  type="text"
                  className="comment-input"
                  placeholder="Add a public comment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="comment-btn" onClick={handleComment}>Comment</button>
              </>
            ) : (
              <p className="comment-warning">🔒 Please log in to post a comment.</p>
            )}

            <div className="comment">
              {comments.map((item, index) => (
                <div key={index} className="single-comment">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="User"
                  />
                  <div>
                    <p className="comment-user">{item?.user?.userName || "Guest"}</p>
                    <p className="comment-text">{item?.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Suggestions */}
        <div className="suggestion">
          <div className="suggestioncontent">
            <h2>Recommended Videos</h2>
            {[...Array(4)].map((_, index) => (
              <div className="suggestion-item" key={index}>
                <img
                  src="https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg"
                  alt="thumbnail"
                  className="suggestion-thumbnail"
                />
                <div className="suggestion-info">
                  <p className="suggestion-title">Perfect - Ed Sheeran</p>
                  <p className="suggestion-channel">Ed Sheeran</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videopage;
