import { Meteor } from 'meteor/meteor';
import Notes from '../imports/api/notes'

Meteor.startup(() => {
});

// if(Meteor.isServer){
//   // console.log("this is server");
//   Meteor.publish('notes', function notesPublication(){
//       return Notes.find();
//   });
// }