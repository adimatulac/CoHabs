import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notesList');
export const Groups = new Mongo.Collection('groupList');

if (Meteor.isServer) {
    // console.log("this is server");
    Meteor.publish('notes', function notesPublication(){
        return Notes.find({
            date: {
                $gte: new Date()
            }
        }, { sort: { date: 1 } });
    });

    Meteor.publish('group', function groupsPublication(){
        return Groups.find({});
    });

    Meteor.publish('users', function usersPublication(){
        return Meteor.users.find({});
    });

}

Meteor.methods({
    'notes.insert'(type, message, details, date, username, group) {
        console.log('username: ' + this.userId.username);
        // TODO: if the groupname already exists -> warning ! 
        if (!Meteor.user().username) {
            throw new Meteor.Error('not-authorized');
        }

        Notes.insert({
            type: type,
            message: message,
            details: details,
            date: date,
            username: username,
            group: group,
        });
    },
    
    'notes.remove'(noteId){
        Notes.remove(noteId);
    },

    'groups.insert'(groupName, userid) {
        console.log('group name: ' + groupName);
        if (!userid) {
            throw new Meteor.Error('not-authorized');
        }

        var groupID = Groups.insert({
            name: groupName,
            members: [userid]
        }, function(err, mongoID) {
            return mongoID;
        });

        Meteor.users.update({_id: userid}, {
            $set: {
                'profile.group': groupID
            }
        });

        console.log('group id from server: ' + groupID);

        // return groupID;
    },

    'groups.update'(groupid, userid) {
        Groups.update(
            { _id: groupid },
            { $push: { members: userid } }
        );

        Meteor.users.update({_id: userid}, {
            $set: {
                'profile.group': groupid
            }
        });
    },
});


