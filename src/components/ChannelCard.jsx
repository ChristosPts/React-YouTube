import React from 'react';
import { Typography, Box, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

function ChannelCard({ channelDetail, marginTop, background, renderAsLink = true  }) {
  const cardContent = (
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
        image={channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
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
  );

  console.log(channelDetail)

  return (
    <Box
      sx={{
        borderRadius: '8px',
        display: 'flex',
        height: '290px',
        background: background,
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '300px' },
        margin: 'auto',
        marginTop: marginTop,
      }}
    >
      {renderAsLink ? (
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>{cardContent}</Link>
      ) : (
        cardContent
      )}
    </Box>
  );
}

export default ChannelCard;
