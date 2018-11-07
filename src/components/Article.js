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

		this.handleClick = this.handleClick.bind(this);
	}
	shouldComponentUpdate() {
		const { id, message: { text, articleId } } = this.props;
		
		return id === articleId
	}
	componentWillMount() {
		this.rand1 = Math.floor(Math.random() * 28) + 1;
		this.rand2 = Math.floor(Math.random() * 12);
		this.rand3 = Math.floor(Math.random() * 20) + 3;
	}
	handleClick(e) {
		const { name, id } = this.props;

		this.props.addBookmark({ id, name });

		setTimeout(() => {
			this.props.clearTooltip();
		}, 800);
	}
	render() {
		const { name, text, id, showTooltip, message } = this.props;
		const messageText = message.text;
		return (
			<article>
				<h3>
					<span>
						<Link className='article-button' to={`/news/${id}`}>
							{name}
						</Link>
					</span> 
					<span className='article-date'>
						{`${months[this.rand2]} ${this.rand1}`}  &#183; {`${this.rand3} min read`}
					</span>
					<span 
						className='article-bookmark' 
						onClick={this.handleClick}>
						<i className="fa fa-bookmark-o" aria-hidden="true">
							{ showTooltip && 
								<span className="tooltip">{messageText}</span>
							}
						</i>
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