import { createSlice } from "@reduxjs/toolkit"


const advSlice = createSlice({
  name: 'adv',
  initialState: {
    ads: null,
    selected_ad: '',
    modalAdv: false,
  },
  reducers: {
    setAdv: (state, action) => {
      state.ads = action.payload
    },
    setSelectedAdd: (state, action) => {
      state.selected_ad = action.payload
    },
    setIsModal: (state) => {
      state.modalAdv = !state.modalAdv
    }
  }
})

export const { setAdv, setSelectedAdd, setIsModal } = advSlice.actions;

export default advSlice.reducer;