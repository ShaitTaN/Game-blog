import React, { FC } from 'react'
import PostsList from '../../components/posts/PostsList'
import Sidebar from '../../components/sidebar/Sidebar'
import { useGetPostsQuery } from '../../store/posts/posts.api'
import './home.scss'

const HomePage: FC = () => {
	const {isLoading,isError,data} = useGetPostsQuery()

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