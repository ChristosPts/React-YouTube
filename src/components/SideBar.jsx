import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants.js';

function SideBar({selectedCategory, setSelectedCategory}) {

  return (
    <Stack
      direction="row"
      sx={{
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }, 
        padding: {md:'24px 2px', xs:'4px'},
      }}
    >
      {categories.map((category) => (
       <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#219fca",
          color: "white",
       }}
       key={category.name}
     >
          <span 
            style = {{color:category.name === selectedCategory ? 'white' : '#219fca', marginRight: '14px'}}> 
            {<category.icon/>}</span>
          <span style = {{opacity:category.name === selectedCategory ? '1' : '0.8'}}>{ category.name }</span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
