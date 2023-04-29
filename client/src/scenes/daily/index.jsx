import React, { useMemo, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from 'components/OverviewChart';
import { useGetSalesQuery } from 'state/api';           // api endpoint called in OverviewChart component
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";        // https://github.com/Hacker0x01/react-datepicker

const Daily = () => {
	const [startDate, setStartDate] = useState(new Date('2023-01-01'));
	const [endDate, setEndDate] = useState(new Date('2023-04-01'));
	const { data } = useGetSalesQuery();		// data from useGetSalesQuery
	const theme = useTheme();

	const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;
    const totalSalesLine = {
      id:'totalSales',
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id:'totalUnits',
      color: theme.palette.secondary[600],
      data: [],
    };

    // Grab values of daily data from server data index.js and formatting it
    Object.values(dailyData).forEach(({ date, totalSales, totalUnits}) =>{
      const dateFormatted = new date(date);
      if(dateFormatted >= startDate && dateFormatted <= endDate){
        const splitDate = date.substring(date.indexOf('-' + 1));  // grab contents after '-'

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x:splitDate, y:totalSales }
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x:splitDate, y:totalUnits }
        ];
      }
    })
    const formattedData = [totalSalesLine, totalUnitsLine]
    return [formattedData]
	}, [data, startDate, endDate])        // eslint-disable-line react-hooks/exhaustive-deps

	return (  
    <div>Daily</div>
  )
}

export default Daily