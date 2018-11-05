import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { handleLogin } from './actions/UserAction';
import { getNews } from './actions/NewsAction';

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
                <Navbar />
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
                    <PrivateRoute path='/profile' render={(routerProps) =>
                        <Profile {...this.props} />
                    }/>
                    <Route path='/login' render={(routerProps) =>
                        <LoginForm {...this.props} />
                    }/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        news: store.news,
        user: store.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (e) => dispatch(handleLogin(e)),
        getNews: () => dispatch(getNews())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
