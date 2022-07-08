import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './header.scss'
const logo = require('../../assets/images/gaming-logo.jpg')

const Header: FC = () => {
	return (
		<header className='header'>
			<div className="container">
				<div className="header__logo">
				<NavLink to={'/'}><img src={logo}/></NavLink>
				</div>
				<nav className='header__nav'>
					<NavLink className='header__nav-link' to={'/'} >Home</NavLink>
					<NavLink className='header__nav-link' to={'/posts'}>Posts</NavLink>
					<NavLink className='header__nav-link' to={'/favourites'}>Favourites</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header