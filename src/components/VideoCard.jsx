import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoTitle } from '../utils/constants';

function decodeHtmlEntities(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function VideoCard({ video: { id: { videoId }, snippet } }) {
  const decodedTitle = decodeHtmlEntities(snippet?.title);

  return (
    <Card sx={{ width: { xs: "300px" }, borderRadius:'8px',backgroundColor: '#474747' }}>
      <Link to={videoId ? `/video/${videoId}` : `/`}>
        <CardMedia
          image={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          sx={{ width: 300, height: 170 }}
        />
      </Link>
      <CardContent sx={{ height: '120px' }}>
        <Link to={videoId ? `/video/${videoId}` : `/`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {decodedTitle.slice(0, 50) || demoTitle}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : `/`}>
          <Typography variant="subtitle2" color="#888">
            {snippet?.channelTitle || demoTitle}
            <CheckCircle sx={{ fontSize: 12, color: '#888', ml: '6px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
