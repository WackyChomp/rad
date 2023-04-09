import React from 'react'
import { Box, useTheme } from '@mui/material';
import { useGetCustomersQuery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log('data', data);

  const columns = [
    {
      field:'_id',
      headerName:'ID',
      flex:1,
    },
    {
      field:'name',
      headerName:'Name',
      flex:0.5,
    },
    {
      field:'email',
      headerName:'Email',
      flex:1,
    },
    {
      field:'phoneNumber',
      headerName:'Phone Number',
      flex:0.5,
      renderCells:(params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3')     // regex
      },
    },
    {
      field:'country',
      headerName:'Country',
      flex:0.5,
    },
    {
      field:'occupation',
      headerName:'Occupation',
      flex:0.5,
    },
    {
      field:'role',
      headerName:'Role',
      flex:0.5,
    },
  ]
  
  return (
    <Box m='1.5rem 3rem'>
      <Header title='CUSTOMERS' subtitle='List of Customers' />
      <Box mt='50px' height='80vh'>
        <DataGrid 
          loading={ isLoading || !data }
          getRowId={(row) => row._id}
          rows={ data || [] }
          columns={ columns }
        />
      </Box>
      
      <Box m='1.5rem 0' p='2rem 0' fontWeight='bold' color='gold'>Customers be like when they do not get their way ---- :o</Box>
    </Box>
  )
}

export default Customers