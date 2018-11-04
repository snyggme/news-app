import React, { Component } from 'react';
import Article from './Article';
import Single from './Single';

class News extends Component{
	componentDidMount() {
		this.props.getNews();
	}
	render() {
		const { isFetching, articles, error } = this.props.news;

		return (
			<section className='news-container'>
				{ isFetching 
					? <div className='loading' />
					: error 
						? <div>{error}</div>
						: articles.map((article, index) => 
							<Article key={index} {...article} />
					)
				}
			</section>
		)
	}
}

export default News;
