import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    access_token: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload
      console.log("🚀 ~ file: user-slice.jsx:12 ~ state.user:", state.user)
      localStorage.setItem('user', JSON.stringify(state.user))
      // console.log(state.user)
      // state.id = payload.id
      // state.email = payload.email 
      // // state.password = payload.password
      // state.name = payload.name
      // state.surname = payload.surname
      // state.city = payload.city
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload
      localStorage.setItem('access_token', state.access_token)
      console.log("🚀 ~ file: user-slice.jsx:25 ~ localStorage:", localStorage)

    }
  }
})

export const { userLogin, setAccessToken } = userSlice.actions;

export default userSlice.reducer;