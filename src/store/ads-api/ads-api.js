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
    getAddById: build.mutation({
      query: (id) => ({
        header: {
          'content-type': 'application/json',
        },
        url: `ads/${id}`,
        method: 'GET',
      })
    }),
    // updateToken: build.mutation({
    //   query: (body) => ({
    //     headers: {
    //       'content-type': 'application/json',
    //       // Authorization: `Bearer ${body.access_token}`,
    //     },
    //     url: '/auth/login',
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       access_token: body.access_token,
    //       refresh_token: body.refresh_token,
    //     }),
    //   })
    // }),
    getUser: build.mutation({
      query: () => ({
        url: "/user",
        method: `GET`,
        // headers: {
        //   Authorization: `Bearer ${body}`,
        // },
      }),
    }),
  }),
})

export const { 
  useGetAdsQuery, 
  usePostRegMutation, 
  usePostLoginMutation, 
  useGetUserMutation,
  useGetAddByIdMutation,
} = adsApi;