import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notesList');
export const GroupsTest = new Mongo.Collection('groupTest');

if (Meteor.isServer) {
    // console.log("this is server");
    Meteor.publish('notes', function notesPublication(){
        return Notes.find({
            date: {
                $gte: new Date()
            }
        }, { sort: { date: 1 } });
    });

    Meteor.publish('groupTest', function groupsPublication(){
        return GroupsTest.find({});
    });

    Meteor.publish('users', function usersPublication(){
        console.log('Meteor users: ' + Meteor.users().find({}));
        return Meteor.users().find({});
    })

}

Meteor.methods({
    'notes.insert'(type, message, details, date, username) {
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
        });
    },
    
    'notes.remove'(noteId){
        Notes.remove(noteId);
    },
    // 'groupTest.insert'(id, groupName, userid) {
    //     console.log('group name: ' + groupName);
    //     if (!userid) {
    //         throw new Meteor.Error('not-authorized');
    //     }

    //     GroupsTest.insert({
    //         id: id,
    //         name: groupName,
    //         members: [userid]
    //     });
    // },
    'groupTest.insert'(groupName, userid) {
        console.log('group name: ' + groupName);
        if (!userid) {
            throw new Meteor.Error('not-authorized');
        }

        var groupID = GroupsTest.insert({
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
    'groupTest.update'(groupid, userid) {
        GroupsTest.update(
            { _id: groupid },
            { $push: { members: userid } }
        );
    },
});


