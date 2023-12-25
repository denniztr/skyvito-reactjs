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
    patchAdv: build.mutation({
      query: ({ id, body }) => ({
        headers: {
          'content-type': 'application/json'
        },
        url: `ads/${id}`,
        method: 'PATCH',
        body: {
          title: body.title,
          description: body.description,
          price: body.price,
        }
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
      query: ({ access_token, refresh_token }) => ({
        headers: {
          'content-type': 'application/json',
        },
        url: 'auth/login',
        method: 'PUT',
        body: {
          access_token: access_token,
          refresh_token: refresh_token,
        },
      })
    }),
    getUser: build.mutation({
      query: () => ({
        url: "/user",
        method: `GET`,
      }),
    }),
    patchUser: build.mutation({
      query: (body) => ({
        headers: {
          'content-type': 'application/json'
        },
        url: '/user',
        method: `PATCH`,
        body: JSON.stringify({
          // email: body.email,
          name: body.name,
          surname: body.surname,
          city: body.city,
          phone: body.phone,
        })
      })
    }),
    postUserAvatar: build.mutation({
      query: (formData) => ({
        url: 'user/avatar',
        method: 'POST',
        body: formData,
      }),
    }),
    getAllUsers: build.mutation({
      query: () => ({
        url: "/user/all",
        method: 'GET',
      })
    }),
    postImage: build.mutation({
      query: ({ id, image}) => ({
        headers: {
          'content-type': 'application/json'
        },
        url: `ads/${id}/image`,
        method: 'POST',
        body: {
          body: image,
        }
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
  useGetAllUsersMutation,
  useUpdateTokenMutation,
  usePostAdvMutation,
  useGetCommentsMutation,
  usePostCommentMutation,
  useGetImagesMutation,
  useDeleteAdvMutation,
  usePatchAdvMutation,
  usePatchUserMutation,
  usePostImageMutation,
  usePostUserAvatarMutation,
} = adsApi;