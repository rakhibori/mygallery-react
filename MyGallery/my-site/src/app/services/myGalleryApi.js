// baraye gerftane data az json servar
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const myGalleryApi = createApi({
    reducerPath: 'myGalleryApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getMyGallery: builder.query({
            query:()=> 'myGallery',
            providesTags: ['myGallery']
        }),
    })
})

export const {useGetMyGalleryQuery} = myGalleryApi;