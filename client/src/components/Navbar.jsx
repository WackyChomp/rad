import React, {useState} from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { setMode } from 'state';
import FlexBetween from './FlexBetween';
import { AppBar, Toolbar, IconButton, InputBase, useTheme } from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{ position:'static', background:'none', boxShadow:'none' }}
    >
      <Toolbar sx={{ justifyContent:'space-between' }}>
        {/* Left Side Navbar */}
        <FlexBetween>
          <IconButton onClick={()=> console.log('open/close sidebar')}>
            <MenuIcon />
          </IconButton> 
          <FlexBetween
            background={theme.palette.background.alt}
            borderRadius='10px'
            gap='3rem'
            p='0.1rem 1.5rem'
          >
            <InputBase placeholder='Searching ... ' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween> 
        </FlexBetween>  
        
        {/* Right Side Navbar */}
        <FlexBetween gap='1.5rem'>
          <IconButton onClick={()=> dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize:'20px' }} />
            ): (
              <LightModeOutlined sx={{ fontSize:'20px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize:'20px' }} />
          </IconButton>

        </FlexBetween>
      
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;