import { Meteor } from 'meteor/meteor';
import Notes from '../imports/api/notes'

Meteor.startup(() => {
});


Meteor.publish('notes.public', function() {
  return Notes.find({});
});