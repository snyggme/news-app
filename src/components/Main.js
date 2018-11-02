import React from 'react';
import coffee from '../assets/coffee.svg'

const Main = (props) => {
	return (
		<main>
			<h1>Let's read some News!</h1>
			<img className='coffee-cup' src={coffee} alt="coffee cup" />
		</main>
	)
}

export default Main;