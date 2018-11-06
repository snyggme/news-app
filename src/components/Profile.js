import React, { Component } from 'react';
import { cachedUser } from '../utils/network';
import auth from '../utils/auth';

class Profile extends Component {
	componentDidMount() {
		// if (auth.isAuthenticated() && !this.props.user.data.hasOwnProperty('city')) {
		// 	this.props.history.push('/login');
		// }
		this.props.getUserInfo();
	}
	render() {
		const { city, languages, userId } = this.props.user.data;
		const { isLoading } = this.props.user;
		const langs = [];
		console.log(this.props.user.data.hasOwnProperty('city'))
		for (var key in languages) {
		    langs.push(languages[key])
		}

		return (
			<section>
				{ isLoading 
					? <div className='loading' />
					: (
						<div>
							<h1>Profile</h1>
							<div>{city}</div>
							<div>{userId}</div>
							<div>{langs[0]}</div>
							<div>{langs[1]}</div>
						</div>
					)

				}
			</section>
		)	
	}
}

export default Profile;

