import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"


export const userApi = createApi({
  reducerPath: 'user-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => 'user',
    }),
    getAllUsers: build.mutation({
      url: '/user/all'
    })
  })
})


export const { useGetUserQuery, useGetAllUsersMutation } = userApi;