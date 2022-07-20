import React, { FC } from 'react'
import PostsList from '../../components/posts/PostsList'
import { useAppSelector } from '../../hooks/useAppSelector'
import './favourites.scss'

const FavouritesPage:FC = () => {
	const {favourites} = useAppSelector(state => state.posts)

	if(favourites.length < 1){
		return <h1 style={{textAlign: 'center'}}>Nothing in favoutites</h1>
	}

	return (
		<div className='favourites'>
			<div className="container">
				<div className='favourites__title'>Your Favourites</div>
				<PostsList posts={favourites}/>
			</div>
		</div>
	)
}

export default FavouritesPage