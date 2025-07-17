import './App.css';
import Navbar from './component/navbar/Navbar';
import Homepage from './component/homepage/Homepage';
import Sidenav from './component/navbar/Sidenav';
import Videopage from './component/pages/Videopage';
import Profile from './component/pages/Profile';
import Upload from './component/pages/Upload';
import Signup from './component/pages/Signup';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// ✅ Axios default config for all requests
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  const [navvisible, setnavvisible] = useState(false);

  return (
    <div className="App">
      <Navbar setnavoption={() => setnavvisible(prev => !prev)} />
      {!navvisible && <Sidenav />}

      <Routes>
        <Route path="/" element={<Homepage navvisible={!navvisible} />} />
        <Route path="/watch/:id" element={<Videopage navvisible={!navvisible} />} />
        <Route path="/user/:id" element={<Profile navvisible={!navvisible} />} />
        <Route path="/:id/upload" element={<Upload navvisible={!navvisible} />} />
        <Route path="/signup" element={<Signup navvisible={!navvisible} />} />
      </Routes>
    </div>
  );
}

export default App;
