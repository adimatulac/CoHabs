import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
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
