import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {
	constructor(props) {
		super(props);
		// day
		this.rand1 = 1;
		// month
		this.rand2 = 0;
		// mins read
		this.rand3 = 0;
	}
	componentWillMount() {
		this.rand1 = Math.floor(Math.random() * 28) + 1;
		this.rand2 = Math.floor(Math.random() * 12);
		this.rand3 = Math.floor(Math.random() * 20) + 3;
	}
	render() {
		const { name, text, id } = this.props;

		return (
			<article>
				<h3>
					<span>{name}</span> 
					<span className='article-date'>
						{`${months[this.rand2]} ${this.rand1}`}  &#183; {`${this.rand3} min read`}
					</span>
				</h3>
				<Link className='article-button' to={`/news/${id}`}>
					<div>{text}</div>
				</Link>
			</article>
		)
	}
}

export default Article;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];