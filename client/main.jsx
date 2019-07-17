import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../imports/index.css';
import '../imports/startup/accounts-config.js';



Meteor.startup(() => {
  render(
		<App />, document.getElementById('react-target'));
});


if(Meteor.isClient){
	Meteor.subscribe('theNotes');
}
