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
    // insert method should take groupname and username -- when to authenticate user?
    'groups.insert'(id, groupname, username) {
        console.log('groupname: ' + groupname);
        if (!username) {
            throw new Meteor.Error('not-authorized');
        }

        Groups.insert({
            id: id,
            groupname: groupname,
            members: [username]
        });
    },

    // update method should take group id and username
    'groups.update'(id, username) {
        Groups.update(
            { id: id },
            { $addToSet: { members: username } }
        )
    }
});


