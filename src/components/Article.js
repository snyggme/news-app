import React, { Component } from 'react';

class Article extends Component {
	constructor(props) {
		super(props);

		this.rand1 = 0;
		this.rand2 = 0;
		this.rand3 = 0;
	}
	componentWillMount() {
		this.rand1 = Math.floor(Math.random() * 28) + 1;
		this.rand2 = Math.floor(Math.random() * 12);
		this.rand3 = Math.floor(Math.random() * 20) + 3;
	}
	render() {
		const { name, text } = this.props;

		return (
			<article>
				<h3>
					<span>{name}</span> 
					<span className='article-date'>
						{`${months[this.rand2]} ${this.rand1}`}  &#183; {`${this.rand3} min read`}
					</span>
				</h3>
				<div>{text}</div>
			</article>
		)
	}
	
}

export default Article;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];