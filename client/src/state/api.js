import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API call

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	reducerPath: 'adminApi',
	tagTypes: ['User', 'Products', 'Customers'],
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
			query: () => 'client/customers',		// server index.js -> server routes client.js -> server controller clinet.js
			providesTags: ['Customers'],
		})
	})
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api;          //from getUser above
