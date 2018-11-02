import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './App';

import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

const Root = ({ store }) => (
	<Provider store={store}>
    	<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
  	</Provider>
)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
