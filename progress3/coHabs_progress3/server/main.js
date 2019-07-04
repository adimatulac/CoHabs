import { Meteor } from 'meteor/meteor';
import Notes from '../imports/api/notes'

// function insertLink(title, url) {
//   Notes.insert({ title, url, createdAt: new Date() });
// }

// NotesList = new Mongo.Collection('notes');


Meteor.startup(() => {
  //Notes.insert({name: "jess"});
  console.log(Notes.find().fetch());
  // If the Links collection is empty, add some data.
  // if (Notes.find().count() === 0) {
  //   insertLink(
  //     'Do the Tutorial',
  //     'https://www.meteor.com/tutorials/react/creating-an-app'
  //   );

  //   insertLink(
  //     'Follow the Guide',
  //     'http://guide.meteor.com'
  //   );

  //   insertLink(
  //     'Read the Docs',
  //     'https://docs.meteor.com'
  //   );

  //   insertLink(
  //     'Discussions',
  //     'https://forums.meteor.com'
  //   );
  // }
});


Meteor.publish('notes.public', function() {
  return Notes.find({});
});