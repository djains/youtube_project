import React, { useState, useEffect } from 'react';
import './Upload.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Upload(props) {
  const [inputField, setInputField] = useState({
    title: '',
    description: '',
    videoLink: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    if (!userId) {
      navigate('/'); // Redirect to home if not logged in
    }
  }, [navigate]);

  const handleOnChangeInput = (e, name) => {
    setInputField(prev => ({
      ...prev,
      [name]: e.target.value
    }));
  };

  const handlesubmitfunc = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!inputField.title || !inputField.description || !inputField.videoLink) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/video', inputField, {
        withCredentials: true
      });

      if (response.data.success) {
        
        toast.success("✅ Video uploaded successfully!");
    
      } else {
        toast.error(response.data.message || "Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("An error occurred during upload.");
    }
  };

  return (


    <div className={props.navvisible ? 'upload' : 'upload without'}>
      <div className="upload-card">
        <h2>Upload Your Video</h2>

        <form className="upload-form" onSubmit={handlesubmitfunc}>
          <input
            type="text"
            placeholder="Video Title"
            value={inputField.title}
            onChange={(e) => handleOnChangeInput(e, 'title')}
          />
          <textarea
            placeholder="Description"
            value={inputField.description}
            onChange={(e) => handleOnChangeInput(e, 'description')}
          />
          <input
            type="text"
            placeholder="Video Link (MP4 URL)"
            value={inputField.videoLink}
            onChange={(e) => handleOnChangeInput(e, 'videoLink')}
          />
          <div>

          <Link to="/"><button type="button" >HOMPAGE</button></Link>
          </div>

          <button type="submit">Upload</button>
        </form>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default Upload;
