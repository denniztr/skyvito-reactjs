import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adsApi = createApi({
  reducerPath: 'ads-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    getAds: build.query({
      query: () => 'ads',
    })
  })
})

export const { useGetAdsQuery } = adsApi;