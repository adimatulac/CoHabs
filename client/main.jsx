import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../imports/index.css';
import '../imports/startup/accounts-config.js';

import { renderRoutes } from '../imports/startup/routes';


// Meteor.startup(() => {
//   render(
// 		<App />, document.getElementById('react-target'));
// });

Meteor.startup(() => {
	render(renderRoutes(), document.getElementById('react-target'));
});


if (Meteor.isClient) {
	Meteor.subscribe('theNotes');
}
