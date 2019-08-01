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
    // insert method should take groupName and username -- when to authenticate user?
    'groups.insert'(id, groupName, userid) {
        console.log('group name: ' + groupName);
        if (!userid) {
            throw new Meteor.Error('not-authorized');
        }

        Groups.insert({
            id: id,
            name: groupName,
            members: [userid]
        });
    },

    // update method should take group id and username
    'groups.update'(groupid, userid) {
        Groups.update(
            { id: groupid },
            { $addToSet: { members: userid } }
        );
    }
});


