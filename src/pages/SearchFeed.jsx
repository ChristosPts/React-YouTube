import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from '../components/Videos';
import {useParams} from 'react-router-dom'
import { fetchFromAPI } from '../utils/API';

function SearchFeed() {
  
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      });
  }, [searchTerm]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box py={3} px={5} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' sx={{ color: 'white' }} my={2}>
        Search Results For <span style={{ color: '#F31503' }}> {searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
