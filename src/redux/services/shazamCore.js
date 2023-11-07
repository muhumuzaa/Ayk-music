import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


  


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: '',
            prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key', '');
                return headers;
            }
        }),
        endpoints: (builders) =>({
            getTopCharts: builders.query({query: () =>'/charts/world'})
        })
    })

    export const {
        useGetTopChartsQuery, 
    } = shazamCoreApi;