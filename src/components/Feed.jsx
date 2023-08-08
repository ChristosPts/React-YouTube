import React ,{useState,useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'

function Feed() {
  return (
    <Stack sx = {{ flexDirection: {sx: 'colum', md: 'row' }}}>
        <Box sx = {{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0, md:2}}}>
            <SideBar/>

            <Typography className = 'copyright' variant='body2' sx={{mt: 1.5, color: '#FFF'}}> 
                No Rights Reserverd 2023
            </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex:2}}>
          <Typography variant = 'h4' fontWeight='bold' sx={{color:'white'}}>
            New <span style={{color: '#F31503'}}>Videos</span>
          </Typography>

           <Videos />


        </Box>

    </Stack>
  )
}

export default Feed