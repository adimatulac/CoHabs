import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Groups = new Mongo.Collection('groupsList');

if (Meteor.isServer) {
    // console.log("this is server");
    Meteor.publish('groups', function groupsPublication(){
        return Groups.find();
    });
}

Meteor.methods({
    // insert method should take group id and username -- when to authenticate id and user?
    'groups.insert'(id, username) {
        console.log('group id: ' + id);
        if (!Meteor.user().username) {
            throw new Meteor.Error('not-authorized');
        }

        Groups.insert({
            members: []
        });
    }
});


