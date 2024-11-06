import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './wallet/walletSlice.js'


export const store = configureStore({
  reducer:{
    wallet: walletReducer,
  },
});
