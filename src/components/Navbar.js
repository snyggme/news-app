import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}
	shouldComponentUpdate(nextProps) {
		if (nextProps.login.isLogged !== this.props.login.isLogged)
			return true

		return nextProps.login.isChecking !== this.props.login.isChecking;
	}
	handleClick(e) {
		if (this.props.login.isLogged) {
			this.props.handleLogout();

			this.props.history.push('/');
		} else {
			this.props.history.push('/login');
		}
	}
	render() {
		const { isChecking, isLogged } = this.props.login;

		let logText = isLogged
			? 'Logout'
			: 'Login';

		if (isChecking)
			logText = 'Checking'

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
						<div onClick={this.handleClick}> 
							<i className="fa fa-sign-in" aria-hidden="true"></i>
							{logText}
						</div>
					</li>
				</ul>
			</nav>
		)	
	}
}

export default Navbar;