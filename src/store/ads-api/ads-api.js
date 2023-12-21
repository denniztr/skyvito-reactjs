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
    postAdv: build.mutation({
      query: (body) => ({
        headers: {
          'content-type': 'application/json'
        },
        url: '/adstext',
        method: 'POST',
        body: {
          title: body.title,
          description: body.description,
          price: body.price,
        }
      })
    }),
    deleteAdv: build.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      })
    }),
    postComment: build.mutation({
      query: ({id, body}) => ({
        headers: {
          'content-type': 'application/json'
        },
        url: `ads/${id}/comments`,
        method: 'POST',
        body: JSON.stringify({
          text: body.text
        })
      }),
    }),
    getComments: build.mutation({
      query: (id) => ({
        headers: {
          'content-type': 'application/json'
        },
        url: `ads/${id}/comments`,
        method: 'GET',
      })
    }),
    getImages: build.mutation({
      query: () => ({
        url: 'images',
        method: 'GET',
      })
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
    updateToken: build.mutation({
      query: (body) => ({
        headers: {
          'content-type': 'application/json',
        },
        url: '/auth/login',
        method: 'PUT',
        body: JSON.stringify({
          access_token: body.access_token,
          refresh_token: body.refresh_token,
        }),
      })
    }),
    getUser: build.mutation({
      query: () => ({
        url: "/user",
        method: `GET`,
      }),
    }),
    getAllUsers: build.mutation({
      query: () => ({
        url: "/user/all",
        method: 'GET',
      })
    }),
  }),
})

export const { 
  useGetAdsQuery, 
  usePostRegMutation, 
  usePostLoginMutation, 
  useGetUserMutation,
  useGetAddByIdMutation,
  useGetAllUsersMutation,
  useUpdateTokenMutation,
  usePostAdvMutation,
  useGetCommentsMutation,
  usePostCommentMutation,
  useGetImagesMutation,
  useDeleteAdvMutation,
} = adsApi;