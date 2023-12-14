import { configureStore } from "@reduxjs/toolkit"
import { adsApi } from '../ads-api/ads-api'

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(adsApi.middleware)
})