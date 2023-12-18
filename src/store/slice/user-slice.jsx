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
      console.log(state.user)
      localStorage.setItem('user', JSON.stringify(state.user.user))
      // state.id = payload.id
      // state.email = payload.email 
      // // state.password = payload.password
      // state.name = payload.name
      // state.surname = payload.surname
      // state.city = payload.city
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload
      console.log('access token: ' + state.access_token)
    }
  }
})

export const { userLogin, setAccessToken } = userSlice.actions;

export default userSlice.reducer;