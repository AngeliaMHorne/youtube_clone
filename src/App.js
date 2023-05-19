import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000000' }}>
      <Navbar />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Feed />} />
        <Route path={`${process.env.PUBLIC_URL}/video/:id`} element={<VideoDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/channel/:id`} element={<ChannelDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/search/:searchTerm`} element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;