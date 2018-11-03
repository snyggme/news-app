import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { handleLogin } from './actions/UserAction';
import { getNews } from './actions/NewsAction';

import Navbar from './components/Navbar';
import Main from './components/Main';
import News from './components/News';
import Profile from './components/Profile';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' render={(routerProps) =>
                        <Main {...this.props} />
                    }/>                   
                    <Route path='/news' render={(routerProps) => 
                        <News {...this.props} {...routerProps} />
                    }/>
                    <Route path='/profile' render={(routerProps) =>
                        <Profile {...this.props} />
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
        handleLogin: () => dispatch(handleLogin()),
        getNews: () => dispatch(getNews())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
