import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { getUserInfo } from './actions/UserAction';
import { getNews } from './actions/NewsAction';
import { handleLogin } from './actions/LoginAction';
import { addBookmark, clearBookmarksTooltip, deleteBookmark } from './actions/BookmarkAction';

import Navbar from './components/Navbar';
import Main from './components/Main';
import News from './components/News';
import Profile from './components/Profile';
import Single from './components/Single';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props} />
                <Switch>
                    <Route exact path='/' render={(routerProps) =>
                        <Main {...this.props} />
                    }/>             
                    <Route exact path='/news' render={(routerProps) => 
                        <News {...this.props} {...routerProps} />
                    }>
                    </Route>
                    <Route path='/news/:articleId' render={(routerProps) => 
                        <Single {...this.props} {...routerProps} />
                    }/> 
                    <Route path='/login' render={(routerProps) =>
                        <LoginForm {...this.props} />
                    }/>
                    <PrivateRoute {...this.props} path='/profile' component={Profile}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        news: store.news,
        user: store.user,
        login: store.login,
        bookmarks: store.bookmarks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (e) => dispatch(handleLogin(e)),
        getNews: () => dispatch(getNews()),
        getUserInfo: () => dispatch(getUserInfo()),
        addBookmark: (article) => dispatch(addBookmark(article)),
        clearBookmarksTooltip: () => dispatch(clearBookmarksTooltip()),
        deleteBookmark: (id) => dispatch(deleteBookmark(id))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
