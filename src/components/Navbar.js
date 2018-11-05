import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className='flex-nav'>
			<ul>
				<li>
					<Link to='/'>
						<i className="fa fa-home" aria-hidden="true"></i>
						Main
					</Link>
				</li>
				<li>
					<Link to='/news'>
						<i className="fa fa-newspaper-o" aria-hidden="true"></i>
						News
					</Link>
				</li>
				<li className='flex-growing'>
					<Link to='/profile'>
						<i className="fa fa-user" aria-hidden="true"></i>
						Profile
					</Link>
				</li>
				<li className='btn-login'>
					<Link to='/login'>
						<i className="fa fa-sign-in" aria-hidden="true"></i>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;