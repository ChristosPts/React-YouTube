import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <Stack
      direction="row"
      zIndex="999"
      alignItems="center"
      py={2}
      px={4}
      sx={{
        position: 'sticky',
        background: '#111',
        top: 0,
        justifyContent: 'space-between',
        padding: { md: '16px 24px', xs: '16px' },
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={40} />
        <Typography
          variant="h4"
          sx={{
            display: { md: 'block', xs: 'none' },
            ml: 2,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          LiteTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
