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
    <div>Daily Dosages Don't Demand Delights :{'>'}</div>,
    <Box m='2rem 3rem'>
      <Header title='DAILY SALES' subtitle='Chart of daily ' />
      <Box heigh='80vh'>
        <Box display='flex' justifyContent='flex-end' />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />


    {/* Modified and reused from OverviewChart component */}
    {data ? (
          <ResponsiveLine
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200]
                }
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200]
                }
              },
              tick: {
                line: {
                  stroke: theme.palette.secondary[200],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary[200]
                }
              }
            }}}
            data={formattedData}
            color={{ datum: 'color' }}    // use color data 
            margin={{ top: 20, right: 50, bottom: 50, left: 90 }}    // top: 50, right: 110, bottom: 50, left: 60
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: false,     // prevent lines from stacking on top of each other
                reverse: false
            }}
            yFormat=" >-.2f"
            curve='catmullRom'
            axisTop={null}
            axisRight={null}
            axisBottom={{
                format: (v) => {
                  if (isDashboard) return v.slice(0,3);     // shows abbreviated months on dashboard page
                  return v;
                },
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
                legend: 'Month',     // 'transportation'
                legendOffset: 60,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Total',      // 'count'
                legendOffset: -50,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={
              [
                {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 60,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
              ]
            }
          />
    ) : <>I'm Loadin Ovah Here...</>}
        
      </Box>
    </Box>
  )
}

export default Daily