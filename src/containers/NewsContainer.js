import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';
import Single from '../components/Single';
import { getNews } from '../actions/NewsAction';
import { Route } from 'react-router-dom';
import { 
	addBookmark, 
	clearBookmarksTooltip, 
	deleteBookmark 
} from '../actions/BookmarkAction';

const NewsContainer = (props) => {
	return (
		<div>
			<Route exact path='/news' render={(routerProps) => 
            	<News {...props} {...routerProps} />
            }>
            </Route>
			<Route exact path='/news/:articleId' render={(routerProps) => 
	            <Single {...props} {...routerProps} />
	        }/> 
        </div>
	)
}

const mapStateToProps = store => {
    return {
        news: store.news,
        bookmarks: store.bookmarks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => dispatch(getNews()),
        addBookmark: (article) => dispatch(addBookmark(article)),
        clearBookmarksTooltip: () => dispatch(clearBookmarksTooltip()),
        deleteBookmark: (id) => dispatch(deleteBookmark(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsContainer);

