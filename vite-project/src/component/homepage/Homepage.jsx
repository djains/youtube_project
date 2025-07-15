import React from 'react'
import "./Homepage.css";
// import Link from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Homepage(props) {
    const [data, setdata] = useState([]);

    useEffect(() => {
axios.get('http://localhost:4000/api/allvideos').then((response) => {
  console.log(response.data);
    setdata(response.data);
}).catch((error) => {
  console.error("Error fetching videos:", error);
});

}, []);
//
const option= [
    { name: "All" },
    { name: "Music" },
    { name: "Movies",  },
    { name: "Gaming"},
    { name: "News" },
    { name: "Sports" },
  ];


  return (

  <div className={`homepage ${props.navvisible ? 'with-sidebar' : 'without-sidebar'}`}>
        <div className='homepage-options'>
        {option.map((item, index) => (
            <div className='homepage-option' key={index}>
                
                <span className='homepage-option-text'>{item.name}</span>
            </div>
            ))}


        </div>

        <div className='homepage-content'>
            {
                    data?.map((item, index) => {

                        return (

            <Link to={`/watch/${item._id}`} className="youtube-video">
                <div className="thumbnail">
                    <img src="https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg" alt="Video Thumbnail" />
                    <div className='timing'>28:00</div>

                {/* //thumbail over */}

                </div>
                <div className="video-details">
                    <h3 className='video-title'>{item?.user.channelName}</h3>
                    <p className='video-channel'>{item?.user.userName}</p>
                    <p className='video-views'>1.2M views • 1 year ago</p>
                    </div>

    </Link>
                        )


                    })


            }


  


        </div>

    </div>



  )
}

export default Homepage