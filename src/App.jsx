import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetails from './pages/VideoDetails'
import ChannelDetails from './pages/ChannelDetails'
import SearchFeed from './pages/SearchFeed'


function App() {

  return (
    <BrowserRouter>
       <Box sx = {{backgroundColor: '#555'}} >
          <Navbar/>
        <Routes>
            <Route path = "/" exact element={<Feed/>}/>
            <Route path = "/video/:id"  element={<VideoDetails/>}/>
            <Route path = "/channel/:id"  element={<ChannelDetails/>}/>
            <Route path = "/search/:searchTerm"  element={<SearchFeed/>}/>
        </Routes>
       </Box>
    </BrowserRouter>
  )
}

export default App
