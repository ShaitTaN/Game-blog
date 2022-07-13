import React, { FC } from 'react'
import PostsList from '../../components/posts/PostsList'
import './favourites.scss'

const FavouritesPage:FC = () => {
	return (
		<div className='favourites'>
			<div className="container">
				<h2 className='title'>Your Favourites</h2>
				<PostsList />
			</div>
		</div>
	)
}

export default FavouritesPage