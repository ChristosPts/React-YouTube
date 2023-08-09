import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import Videos from '../components/Videos';
import { fetchFromAPI } from '../utils/API';

function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState(null)
  const [recVideos, setRecVideos] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRecVideos(data.items))

  }, [id])

  if(!videoDetail?.snippet) return 'Loading...'
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail
 

  return (
    <Box minHeight='95vh'  sx={{  padding: {md:'2px 8px 2px 32px', xs:'16px'}, }}>

      {/* Video Section */}
      <Stack direction={{xs: 'column', md:'row'}}>
          <Box flex = {1}>
              <Box sx={{width: '100%', position: 'sticky', top: '90px'}}>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
                  <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                      {title}
                  </Typography>

                  <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} py={1} px={2}>
                      <Link to={`/channel/${channelId}`}>
                        <Typography variant='h6' color="#fff"> 
                            {channelTitle}
                            <CheckCircle sx={{fontSize: '14px', color:'gray', ml:'6px'}}></CheckCircle>

                        </Typography>
                      </Link>
                    
                    <Stack direction='row' gap='18px' alignItems='center'>
                      <Typography variant="body1" sx={{opacity: '0.7'}}>
                         {parseInt(viewCount).toLocaleString()} views
                      </Typography>
                      <Typography variant="body1" sx={{opacity: '0.7'}}>
                         {parseInt(likeCount).toLocaleString()} likes
                      </Typography>
                    </Stack>

                  </Stack>
              </Box>
          </Box>

          
          {/* Reccomended Video Section */}
          <Box px={3} sx={{  padding: { xs:'16px'}}} display='flex' justifyContent='center' alignItems='center'>
              <Videos videos={recVideos} direction='column'/>
          </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetails