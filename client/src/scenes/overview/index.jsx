import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from 'components/OverviewChart';


const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <div>Overview Be Right Here!!!</div>,
    <Box m='1.5rem 2.5rem'>
      <Header title='OVERVIEW' subtitle='Overview of revenue and profit' />
      <Box height='80vh'>
        <FormControl sx={{ mt:'1rem' }}>
          <InputLabel>View</InputLabel>
          <Select 
            value={view}
            label='View'
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value='sales'>Sales</MenuItem>
            <MenuItem value='units'>Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
    
  )
}

export default Overview