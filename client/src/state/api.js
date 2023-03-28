import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API call

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,      //server index.js -> routes general.js -> controllers general.js
            provideTags: ["User"]
        })
    })
})

export const { useGetUserQuery } = api;          //from getUser above
