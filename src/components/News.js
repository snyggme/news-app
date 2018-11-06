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
							<Article key={index} {...article} />
					)
				}
			</section>
		)
	}
}

export default News;
