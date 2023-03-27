import React, {useState} from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { setMode } from 'state';
import FlexBetween from './FlexBetween';
import { AppBar, Toolbar, IconButton, InputBase, useTheme } from '@mui/material';

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{ position:'static', background:'none', boxShadow:'none' }}
    >
      <Toolbar sx={{ justifyContent:'space-between' }}>
        {/* Left Side Navbar */}
        <FlexBetween>
          <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
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

          <FlexBetween>
            <Button 
              onClick={handleClick} 
              sx={{ 
                display:'flex', 
                justifyContent:'space-between', 
                alignItems:'center',
                textTransform:'none',
                gap:'1rem'
              }}
            >
              <Box
                component='img'
                alt='profile'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Color_icon_azure.png'
                height='30px'
                width='30px'
                borderRadius='50%'
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign='left'>
                <Typography 
                  fontWeight='bold' 
                  fontSize='0.8rem' 
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography 
                  fontSize='0.7rem' 
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined 
                sx={{ color: theme.palette.secondary[300], fontSize:'25px' }}
              />
            </Button>
          </FlexBetween>

        </FlexBetween>
      
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;