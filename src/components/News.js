import React, { Component } from 'react';
import Article from './Article';

class News extends Component {
	componentDidMount() {
		this.props.getNews()
	}
	render() {
		const { isFetching, articles, error, errorMessage } = this.props.news;

		return (
			<section className='news-container'>
				{ isFetching 
					? <div className='loading' />
					: error 
						? <div>{errorMessage}</div>
						: articles.map((article, index) => 
							<Article 
								key={index}
								showTooltip={this.props.bookmarks.showTooltip}
								message={this.props.bookmarks.message}
								addBookmark={this.props.addBookmark}
								clearTooltip={this.props.clearBookmarksTooltip}
								{...article} />
					)
				}
			</section>
		)
	}
}

export default News;
