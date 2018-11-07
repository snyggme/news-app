import React, { Component } from 'react';

class Single extends Component {
	constructor(props) {
		super(props);

		this.props.getNews();
	}
	renderArticle() {
		const { articleId } = this.props.match.params;
		const { text, name }= this.props.news.articles[articleId - 1];
		const id = articleId - 1;

		return(
			<div className='single-article'>
				<h2>{name}</h2>
				<div>{text}</div>
				<div className='single-article-bookmark'>
					<i 
						className="fa fa-bookmark-o" 
						aria-hidden="true"
						onClick={this.props.addBookmark.bind(null, { id, name })}>
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