import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
// import index from '/imports/index.jsx';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../imports/index.css';
import rootReducer from '../imports/reducers'; 
import { fetchAllNotes } from '../imports/actions/index';
import '../imports/startup/accounts-config.js';


const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllNotes());
console.log('dispatching action ...');


Meteor.startup(() => {
  render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('react-target'));
});
