import React, { useMemo, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from 'components/OverviewChart';
import { useGetSalesQuery } from 'state/api';           // api endpoint called in OverviewChart component
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";        // https://github.com/Hacker0x01/react-datepicker

const Daily = () => {

	return (  
    <div>Daily</div>
  )
}

export default Daily