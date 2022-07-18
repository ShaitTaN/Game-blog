import { postsApi } from './posts/posts.api';
import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './posts/posts.slice';

export const store = configureStore({
  reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		'posts': postsReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch