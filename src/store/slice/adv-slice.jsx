import { createSlice } from "@reduxjs/toolkit"


const advSlice = createSlice({
  name: 'adv',
  initialState: {
    ads: null,
    selected_ad: '',
  },
  reducers: {
    setAdv: (state, action) => {
      state.ads = action.payload
      // console.log(state.ads)
    },
    setSelectedAdd: (state, action) => {
      state.selected_ad = action.payload
    }
  }
})

export const { setAdv, setSelectedAdd } = advSlice.actions;

export default advSlice.reducer;