import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../slice/user-slice/'
import advReducer from '../slice/adv-slice'

import { adsApi } from '../index'

export const store = configureStore({
  reducer: {
    user: userReducer,
    adv: advReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(adsApi.middleware)
})