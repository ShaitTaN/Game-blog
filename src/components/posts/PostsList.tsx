import React, { FC } from 'react'
import './posts.scss'

const PostsList:FC = () => {
	return (
		<div className='posts'>
			<div className="posts__post">
				<img className='posts__post-img' src="https://preview.colorlib.com/theme/thequest/img/blog/2.jpg"/>
				<time className='posts__post-date' dateTime='2020-04-01'>1 April 2020</time>
				<h2 className='title'>The best games of 2020</h2>
				<p className='posts__post-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolorem voluptate quos harum corrupti voluptates nulla amet saepe, et officiis?</p>
				<a className='posts__post-btn' href="#">Read More</a>
			</div>
			<div className="posts__post">
				<img className='posts__post-img' src="https://preview.colorlib.com/theme/thequest/img/blog/2.jpg"/>
				<time className='posts__post-date' dateTime='2020-04-01'>1 April 2020</time>
				<h2 className='title'>The best games of 2020</h2>
				<p className='posts__post-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolorem voluptate quos harum corrupti voluptates nulla amet saepe, et officiis?</p>
				<a className='posts__post-btn' href="#">Read More</a>
			</div>
		</div>
	)
}

export default PostsList