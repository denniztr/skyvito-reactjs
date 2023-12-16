import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../slice/user-slice/'

import { adsApi } from '../ads-api/ads-api'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(adsApi.middleware)
})