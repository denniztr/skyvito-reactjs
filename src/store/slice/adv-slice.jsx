import { createSlice } from "@reduxjs/toolkit"


const advSlice = createSlice({
  name: 'adv',
  initialState: {
    ads: null,
    selected_ad: '',
    modalAdv: false,
    modalComments: false,
    images: [],
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
    },
    setModalComments: (state) => {
      state.modalComments = !state.modalComments
    },
    setImages: (state, action) => {
      state.images = action.payload
    }
  }
})

export const { setAdv, setSelectedAdd, setIsModal, setModalComments, setImages } = advSlice.actions;

export default advSlice.reducer;