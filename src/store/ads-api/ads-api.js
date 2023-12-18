import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adsApi = createApi({
  reducerPath: 'ads-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().user.access_token
      if (token) headers.set('Authorization', `Bearer ${token}`)
    },
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
        body: {
          email: body.email,
          password: body.password,
          name: body.name,
          surname: body.surname,
          city: body.city,
        }
      }),
    }),
    postLogin: build.mutation({
      query: (body) => ({
        headers: {
          'content-type': 'application/json',
        },
        url: 'auth/login',
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
        }
      }),
    }),
    getUser: build.query({
      query: () => 'user'
    })
  }),
})

export const { useGetAdsQuery, usePostRegMutation, usePostLoginMutation, useGetUserQuery } = adsApi;