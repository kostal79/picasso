import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../services/posts'
import { setupListeners } from '@reduxjs/toolkit/query'
import postsReducer from "../../entities/posts-list/api/postsSlice"

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath] : postsApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)