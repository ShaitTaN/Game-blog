import React, { FC, useState } from 'react'
import './filter.scss'

const Filter: FC = () => {
	const [dateSort, setDateSort] = useState('dateNew')
	const [nameSort, setNameSort] = useState('')

	const updateDateSort = (e: any) => {
		setDateSort(e.target.value)
	}
	const updateNameSort = (e: any) => {
		setNameSort(e.target.value)
	}

	return (
		<div className='filter'>
			<div className="filter__sort">
				<h2 className='title'>Sort by date</h2>
				<select name="sort" value={dateSort} onChange={updateDateSort}>
					<option value="dateNew">new to old</option>
					<option value="dateOld">old to new</option>
				</select>
			</div>
			<div className="filter__sort">
				<h2 className='title'>Sort by name</h2>
				<select name="sort" value={nameSort} onChange={updateNameSort}>
					<option value="">none</option>
					<option value="nameA">a-z</option>
					<option value="nameZ">z-a</option>
				</select>
			</div>
		</div>
	)
}

export default Filter