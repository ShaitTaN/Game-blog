import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";

interface PostsState{
	favourites: IPost[]
}

const initialState: PostsState = {
	favourites: []
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addFavourite: (state, action: PayloadAction<IPost>) => {
			state.favourites.push(action.payload)
		},
		removeFavourite: (state, action: PayloadAction<number>) => {
			state.favourites = state.favourites.filter(post => post.id !== action.payload)
		}
	}
})

export const postsActions = postsSlice.actions
export const postsReducer = postsSlice.reducer