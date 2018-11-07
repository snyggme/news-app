import React, { Component } from 'react';
import Bookmark from './Bookmark';
import ErrorMessage from './ErrorMessage';
import user from '../assets/user.svg';

class Profile extends Component {
	componentDidMount() {
		this.props.getUserInfo();
	}
	render() {
		const { city, languages, social } = this.props.user.data;
		const { isLoading, error, errorMessage } = this.props.user;
		const { articles } = this.props.bookmarks;

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
					: error
						? <ErrorMessage message={errorMessage} />
						: (
							<div className='profile-container'>
								<img src={user} alt='user profile' className='user-img' />
								<div><h3 className='user-name'>Unknown User</h3></div>
								<div>
									<span className='city-name'>City: </span> 
									{city}
								</div>
								<div>
									<span className='langs-name'>Knowledge of languages: </span>
									{lang2}, {lang1}
								</div>
								<div>
									<span className='langs-name'>Bookmarks: </span>
									{ 
										articles.map(({ id, name }) =>
											<Bookmark 
												key={id}
												id={id}
												name={name}
												deleteBookmark={this.props.deleteBookmark} 
											/>
										)
									}
								</div>
							</div>
						)
				}
			</section>
		)	
	}
}

export default Profile;
