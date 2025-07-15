import React from 'react'
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import RestoreIcon from '@mui/icons-material/Restore';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Link } from 'react-router-dom';
function Sidenav() {
  return (
    <div className="sidenav">

        <div className="sidenav-top">
            {/* //1 */}
            <div className="top-option">
                <HomeIcon className="top-option-icon" />
                <Link to="/" className="top-option-text">
                <span className="top-option-text">Home</span>
                </Link>

            </div>
             <div className="top-option">
                <VideoCameraFrontIcon className="top-option-icon" />
                <span className="top-option-text">Shorts</span>

            </div>
             <div className="top-option">
                <SubscriptionsIcon className="top-option-icon" />
                <span className="top-option-text">Subscription</span>

            </div>
            


        </div>

        <div className="sidenav-middle">
            <div className="middle-option">
                <RecentActorsIcon className="middle-option-icon" />
                <span className="middle-option-text">Your Channel</span>
            </div>
            <div className="middle-option">
                <RestoreIcon className="middle-option-icon" />
                <span className="middle-option-text">History</span>
            </div>
             <div className="middle-option">
                <PlaylistPlayIcon className="middle-option-icon" />
                <span className="middle-option-text">Playlist</span>
            </div>
            <div className="middle-option">
                <SmartDisplayIcon className="middle-option-icon" />
                <span className="middle-option-text">Your Videos</span>
            </div>
            <div className="middle-option">
                <ScheduleIcon className="middle-option-icon" />
                <span className="middle-option-text">Watch Later</span>
            </div>
            <div className="middle-option">
                <ThumbUpIcon className="middle-option-icon" />
                <span className="middle-option-text">Liked Videos</span>
            </div>


        </div>

        <div className="sidenav-bottom">
            
                <span className="bottom-option-heading">Explore</span>
           
            <div className="bottom-option">
                <WhatshotIcon className="bottom-option-icon" />
                <span className="bottom-option-text">Trending</span>
            </div>
            <div className="bottom-option">
                <AudiotrackIcon className="bottom-option-icon" />
                <span className="bottom-option-text">Music</span>
            </div>
            <div className="bottom-option">
                <SportsEsportsIcon className="bottom-option-icon" />
                <span className="bottom-option-text">Gaming</span>
            </div>
            <div className="bottom-option">
                <NewspaperIcon className="bottom-option-icon" />
                <span className="bottom-option-text">News</span>
            </div>
            <div className="bottom-option">
                <TheatersIcon className="bottom-option-icon" />
                <span className="bottom-option-text">Movies</span>
            </div>
        </div>

    </div>
  )
}

export default Sidenav