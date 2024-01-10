import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '@entities/chart'
import { postsReducer } from '@entities/chart/posts-list'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath] : postsApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)