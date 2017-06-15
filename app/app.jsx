import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import AppContainer from './src/containers/App';
import './app.styl';
import store from './src/store/store';

const App = connect(state => state)(AppContainer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
