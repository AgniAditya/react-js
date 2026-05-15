import { configureStore } from '@reduxjs/toolkit'
import searchReducers from './features/searchSlice'
import collectionReducers from './features/collectionSlice'

export const store = configureStore({
  reducer: {
    search: searchReducers,
    collection: collectionReducers
  },
})