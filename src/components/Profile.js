import React, { Component } from 'react';
import user from '../assets/user.svg';

class Profile extends Component {
	componentDidMount() {
		this.props.getUserInfo();
	}
	render() {
		const { city, languages, social } = this.props.user.data;
		const { isLoading } = this.props.user;

		const langs = [];
		const socials = [];

		for (let key in languages) {
		    langs.push(languages[key])
		}
		for (let key in social) {
		    socials.push(social[key])
		}

		const [ lang1, lang2 ] = langs;
		return (
			<section>
				{ isLoading 
					? <div className='loading' />
					: (
						<div className='profile-container'>
							<img src={user} alr='user profile' className='user-img' />
							<div><h3 className='user-name'>Unknown User</h3></div>
							<div>
								<span className='city-name'>City: </span> 
								{city}
							</div>
							<div>
								<span className='langs-name'>Knowledge of languages: </span>
								{lang2}, {lang1}
							</div>
							<div></div>
						</div>
					)

				}
			</section>
		)	
	}
}

export default Profile;

