import { createSlice } from "@reduxjs/toolkit"


const advSlice = createSlice({
  name: 'adv',
  initialState: {
    ads: null,
  },
  reducers: {
    setAdv: (state, action) => {
      state.ads = action.payload
      // console.log(state.ads)
    }
  }
})

export const { setAdv } = advSlice.actions;

export default advSlice.reducer;