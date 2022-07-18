import React, { FC } from 'react'
import PostsList from '../../components/posts/PostsList'
import './favourites.scss'

const FavouritesPage:FC = () => {
	return (
		<div className='favourites'>
			<div className="container">
				<div className='favourites__title'>Your Favourites</div>
				<PostsList />
			</div>
		</div>
	)
}

export default FavouritesPage