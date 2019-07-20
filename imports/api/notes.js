import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notesList');

if (Meteor.isServer) {
    // console.log("this is server");
    Meteor.publish('notes', function notesPublication(){
        return Notes.find();
    });
}

Meteor.methods({
    'notes.insert'(type, message, details, date, username) {
        console.log('username: ' + this.userId.username);
        if(!Meteor.user().username) {
            throw new Meteor.Error('not-authorized');
        }

        Notes.insert({
            type: type,
            message: message,
            details: details,
            date: date,
            username: username,
        });
    },
    
    'notes.remove'(noteId){
        Notes.remove(noteId);
    },
});


