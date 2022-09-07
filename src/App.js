// import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';


//Old Style importing
// import Navbar from './components/Navbar';
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';
// import { Feed } from '@mui/icons-material';

//New Style
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/Video/:id" element={<VideoDetail />}/>
        <Route path="/Channel/:id" element={<ChannelDetail />}/>
        <Route path="/Search/:searchTerm" element={<SearchFeed />}/>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App

