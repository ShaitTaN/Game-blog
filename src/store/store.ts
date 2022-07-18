import { postsApi } from './posts/posts.api';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
		[postsApi.reducerPath]: postsApi.reducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch