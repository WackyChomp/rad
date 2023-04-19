import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API call

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	reducerPath: 'adminApi',
	tagTypes: ['User', 'Products', 'Customers', 'Transactions', 'Geography'],
	endpoints: (build) => ({
		getUser: build.query({
				query: (id) => `general/user/${id}`,      //server index.js -> server routes general.js -> server controllers general.js
				provideTags: ["User"]
		}),
		getProducts: build.query({
			query: () => 'client/products',			// server index.js -> server routes client.js -> server controller client.js
			provideTags: ["Products"],
		}),
		getCustomers: build.query({
			query: () => 'client/customers',		// server index.js -> server routes client.js -> server controller client.js
			providesTags: ['Customers'],
		}),
		getTransactions: build.query({								// structure for having params 
			query: ({ page, pageSize, sort, search }) => ({			// server index.js -> server routes client.js -> server controller client.js
				url: 'client/transactions',
				method: 'GET',
				params: ({ page, pageSize, sort, search}),
			}),
			providesTags: ['Transactions']
		}),
		getGeography: build.query({
			query: () => 'client/geography',
			providesTags: ['Geography']
		})
	})
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery, useGetGeographyQuery } = api;          //from getUser above
