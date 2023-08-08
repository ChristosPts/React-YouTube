import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoTitle } from '../utils/constants';


function VideoCard({ video: {id: {videoId}, snippet } }) {
   
  return (
    <Card sx = {{width: { xs: "300px"}}}>
      <Link to = {videoId ? `/video/${videoId}` : `/`}>
        <CardMedia 
          image = {snippet?.thumbnails?.high?.url}
          alt = {snippet?.title} sx={{width: 300, height:170}}
        />
      </Link>
      <CardContent sx = {{ backgroundColor:'#474747', height: '100px'}}>
        <Link to = {videoId ? `/video/${videoId}` : `/`}>
           <Typography variant="subtitle1" fontWeight="bold" color='#FFF'>
              {snippet?.title.slice(0,51) || demoTitle}
           </Typography>
        </Link>

        <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : `/`}>
           <Typography variant="subtitle2" color='#888'>
              <CheckCircle sx={{fontSize:12, color:'#888', mr:'4px'}}/>
              {snippet?.channelTitle || demoTitle}
           </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard