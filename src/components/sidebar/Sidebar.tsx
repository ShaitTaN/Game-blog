import React, { FC } from 'react'
import Search from '../search/Search'
import './sidebar.scss'

const Sidebar:FC = () => {
	return (
		<div className='sidebar'>
			<Search/>
		</div>
	)
}

export default Sidebar