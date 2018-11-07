import React from 'react';
import coffee from '../assets/coffee.svg';

const Main = (props) => {
	return (
		<main>
			<h1>Good News, Everyone!</h1>
			<h3>Read the latest news from us!</h3>
			<h3><span style={{color: 'white', textShadow: '1px 1px 2px black'}}>Free</span> articles from experts.</h3>
			<img className='coffee-cup' src={coffee} alt="coffee cup" />
		</main>
	)
}

export default Main;