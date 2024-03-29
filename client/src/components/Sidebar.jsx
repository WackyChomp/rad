import React from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCartOutlined, Groups2Outlined, RecceiptLongOutlined, PublicOutlined, PointOfSaleOutlined, TodayOutlined, CalendarMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined, PieChartOutlined, Home, ReceiptLongOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />
  },
  {
    text: 'Clients',
    icon: null
  },
  {
    text: 'Products',
    icon: <ShoppingCartOutlined />
  },
  {
    text: 'Sales',
    icon: null
  },
  {
    text: 'Customers',
    icon: null
  },
  {
    text: 'Transaction',
    icon: <ReceiptLongOutlined />
  },
  {
    text: 'Geography',
    icon: null
  },
  {
    text: 'Overview',
    icon: null
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutlined />
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />
  },
  {
    text: 'Management',
    icon: null
  },
  {
    text: 'Performance',
    icon: <TrendingUpOutlined />
  },
]

const Sidebar = ({ user, drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {     // properties from index.jsx

  const { pathname } = useLocation();
  const [active, setActive] = useState('');     // identify current state
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));     // set active value to current page
  }, [pathname])

  return (
    <Box component='nav'>
      {isSidebarOpen && (
        <Drawer 
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{ width: drawerWidth, 
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing:'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth
            }
          }}
        >
          <Box width='100%'>
            <Box m='1.5rem 2rem 2rem 3rem'>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display='flex' alignItems='center' gap='0.5rem'>
                  <Typography variant='h4' fontWeight='bold'>
                    RAD
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>


            
            <List>    {/* loops through navItems above */}
              {navItems.map(({ text, icon }) => {
                if (!icon){
                  return (
                    <Typography key={text} sx={{ m:'2.5rem 0 1rem 3rem'}}>
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => { 
                      navigate(`/${lcText}`);
                      setActive(lcText);
                      }}

                      sx={{
                        backgroundColor: active === lcText ?  theme.palette.secondary[300] : 'transparent',
                        color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100]
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml:'2rem',
                          color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text}>
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml:'auto' }} />
                        )}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>

          <Box position='absolute' bottom='2rem'>
            <Divider />
            <FlexBetween textTransform='none' gap='1rem' m='1.5rem 2rem 0 3rem'>
              <Box
                component='img'
                alt='profile'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Color_icon_azure.png'
                height='40px'
                width='40px'
                borderRadius='50%'
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign='left'>
                <Typography 
                  fontWeight='bold' 
                  fontSize='0.9rem' 
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography 
                  fontSize='0.8rem' 
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar