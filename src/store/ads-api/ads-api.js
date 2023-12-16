import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adsApi = createApi({
  reducerPath: 'ads-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    getAds: build.query({
      query: () => 'ads',
    }),
    postReg: build.mutation({
      query: (body) => ({
        headers: {
          'content-type': 'application/json',
        },
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetAdsQuery, usePostRegMutation  } = adsApi;