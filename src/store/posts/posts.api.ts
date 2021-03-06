import { IPost } from './../../models/IPost';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
	reducerPath: 'posts/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3004/'
	}),
	endpoints: build => ({
		getPosts: build.query<IPost[], void>({
			query: () => ({
				url: 'posts'
			}) 
		})
	})
})

export const {useGetPostsQuery, useLazyGetPostsQuery} = postsApi