import React from 'react'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';



function ChannelDetails({ channelDetail }) {
  return (
    <Box
      sx={{
        borderRadius: '4px',
        display: 'flex',
        height: '270px',
        background: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '300px' },
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',  
            width: '100%',  
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '2px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            <CheckCircle sx={{ fontSize: 16, color: '#888', mr: '4px' }} />
            {channelDetail?.snippet?.title.slice(0, 20)}
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelDetails;

 