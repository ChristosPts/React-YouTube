import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {

  const [searchTerm,setSearchTerm]= useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper component="form"
           onSubmit={handleSubmit}
           sx={{ borderRadius:"10px", border: '2px solid #222', pl:1.5, boxShadow: 'none' }}>
        <input
            className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <IconButton type='submit' sx= {{p:'10px', color:'#219fca'}}>
            <SearchIcon></SearchIcon>
        </IconButton>
    </Paper>
  )
}

export default SearchBar