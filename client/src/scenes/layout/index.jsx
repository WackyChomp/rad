import React, {useState} from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useGetUserQuery } from 'state/api';


// Outlet component will render all components from layout component below Navbar component
const Layout = () => {

  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => state.global.userId);         // grabs userId from state index.js
  const { data } = useGetUserQuery(userId)      // destructure and api call
  console.log('data', data);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
      <Sidebar 
        user={ data || {}}
        drawerWidth='300px'
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar 
          user={ data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout