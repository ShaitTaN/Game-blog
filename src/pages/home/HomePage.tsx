import React, { FC } from 'react'
import PostsList from '../../components/posts/PostsList'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'

const HomePage: FC = () => {
	return (
		<div className='home'>
			<h1>Welcome to game blog HEADHOT</h1>
			<div className="container">
				<PostsList/>
				<Sidebar/>
			</div>
		</div>
	)
}

export default HomePage