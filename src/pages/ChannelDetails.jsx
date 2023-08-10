import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ChannelCard from '../components/ChannelCard';
import Videos from '../components/Videos';

import { fetchFromAPI } from '../utils/API';

function ChannelDetails() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh" >
      <Box>
        <Box>
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(218,63,63,1) 0%, rgba(183,118,198,1) 50%, rgba(34,194,222,1) 100%)',
              height: '300px',
              zIndex: '10',
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-90px" background="none" renderAsLink={false} />
        </Box>
        <Box display="flex" p={3} width="100%">
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChannelDetails;
