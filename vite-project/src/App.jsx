
import './App.css'
import Navbar from './component/navbar/Navbar'

import { useState } from 'react';
import Homepage from './component/homepage/Homepage';
import Sidenav from './component/navbar/Sidenav';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Videopage from './component/pages/Videopage';
import Profile from './component/pages/Profile';
import Upload from './component/pages/Upload';
import Signup from './component/pages/Signup';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
const [navvisible, setnavvisible] = useState(false);

// useEffect(() => {
// axios.get('http://localhost:4000/api/allvideos').then((response) => {
//   console.log(response.data);
// }).catch((error) => {
//   console.error("Error fetching videos:", error);
// });

// }, []);

  return (
    <>
    <div className="App">

     <Navbar setnavoption={() => setnavvisible(prev => !prev)} />
      {!navvisible && <Sidenav/>}
    
  
      <Routes>
        <Route path="/" element={ <Homepage navvisible={!navvisible} />} />
        <Route path="/watch/:id" element={<Videopage navvisible={!navvisible}/>} />
        <Route path="/user/:id" element={<Profile navvisible={!navvisible}/>} />
        <Route path="/:id/upload" element={ <Upload navvisible={!navvisible}/>} />
        <Route path="/signup" element={<Signup navvisible={!navvisible}/>} />
        
      </Routes>
     
     </div>
     
    </>
  )
}

export default App
