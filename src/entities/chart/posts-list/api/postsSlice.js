import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  startWith: 0,
  limit: 0,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    increment: (state) => {
      state.startWith += 1
    },
    decrement: (state) => {
      state.startWith -= 1
    },
    setLimit: (state, actions) => {
        state.limit = actions.payload
    }
  },
})

export const { increment, decrement, setLimit } = postsSlice.actions

export default postsSlice.reducer