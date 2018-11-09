import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Main from './components/Main';
import Profile from './components/Profile';
import NavbarContainer from './containers/NavbarContainer';
import NewsContainer from './containers/NewsContainer';
import PrivateRoute from './containers/PrivateRoute';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
    render() {
        return (
            <div>
                <NavbarContainer history={this.props.history} />
                <Switch>
                    <Route exact path='/' component={Main}/>             
                    <Route path='/news' component={NewsContainer} />
                    <Route path='/login' component={LoginContainer} />
                    <PrivateRoute path='/profile' component={Profile} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
