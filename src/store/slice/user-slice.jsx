import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    userLogin: (state, action) => {
      const payload = action.payload
      
      // state.id = payload.id
      // state.email = payload.email 
      // // state.password = payload.password
      // state.name = payload.name
      // state.surname = payload.surname
      // state.city = payload.city
      console.log(payload);
    }
  }
})

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;