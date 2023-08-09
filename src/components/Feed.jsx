import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

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

  useEffect(() => {
    // Hide the body scrollbar
    document.body.style.overflow = 'hidden';

    // Restore the body scrollbar when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#FFF' }}>
          No Rights Reserverd 2023
        </Typography>
      </Box>

      <Box py={3} px={5} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' sx={{ color: 'white' }} my={2}>
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
