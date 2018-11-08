import React, { Component } from 'react';

class Single extends Component {
	constructor(props) {
		super(props);

		this.props.getNews();

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		const { articleId } = this.props.match.params;
		const { name, id } = this.props.news.articles[articleId - 1];

		this.props.addBookmark({ id, name });

		setTimeout(() => {
			this.props.clearBookmarksTooltip();
		}, 800);
	}
	renderArticle() {
		const { articleId } = this.props.match.params;
		const { text, name, id } = this.props.news.articles[articleId - 1];
		const { showTooltip, message } = this.props.bookmarks;
		const messageText = message.text;

		return(
			<div className='single-article'>
				<h2>{name}</h2>
				<div>{text}</div>
				<div className='single-article-bookmark'>
					<i 
						className="fa fa-bookmark-o" 
						aria-hidden="true"
						onClick={this.handleClick}>
						{ showTooltip && 
							<span className="tooltip">{messageText}</span>
						}
					</i>
				</div>
			</div>
		)
	}
	render() {
		const { isFetching, error } = this.props.news;
	
		return (
			<article>
				{ isFetching 
					? <div className='loading' />
					: error 
						? <div>{error}</div>
						: this.renderArticle()
				}
			</article>
		)
	}
}

export default Single;