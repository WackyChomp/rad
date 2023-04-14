import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGetTransactionsQuery } from 'state/api';
import Header from 'components/Header';

const Transactions = () => {
  const theme = useTheme();

  // values sent to backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetTransactionsQuery({
    page, 
    pageSize, 
    sort: JSON.stringify(sort),
    search,
  })
  console.log('data', data)




  return( <div>Transactions O_^ ---- 8^)</div>
  )
}

export default Transactions