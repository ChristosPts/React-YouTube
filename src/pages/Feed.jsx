import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from '../components/SideBar';
import Videos from '../components/Videos';

import { fetchFromAPI } from '../utils/API';

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      });
  }, [selectedCategory]);
 

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '89vh' }, borderRight: '1px solid #303030', px: { sx: 0, md: 3 },  overflowY: 'auto' }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box py={3} px={5} sx={{ overflowY: 'auto', height: '89vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' sx={{ color: 'white' }} my={2}>
          {selectedCategory} <span style={{ color: '#219fca' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
