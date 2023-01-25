import React from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { SettingsOutlined, ChevronLeft, ChevronRIghtOoutlined, HomeOutlined, ShoppingCartOutlined, Groups2Outlined, RecceiptLongOutlined, PublicOutlined, PointOfSaleOutlined, TodayOutlined, CalendarMonthOutlined, AdminPanelSettingOutlined, TrendingUpOutlined, PieChartOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import FlexBetween from './FlexBetween';


const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, isNoMobile }) => {     // properties

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
          
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar