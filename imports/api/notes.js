import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notesList');
export const GroupsTest = new Mongo.Collection('groupTest');
export const Bills = new Mongo.Collection('billsList');

if (Meteor.isServer) {
    // console.log("this is server");
    Meteor.publish('notes', function notesPublication() {
        return Notes.find({
            date: {
                $gte: new Date()
            }
        }, { sort: { date: 1 } });
    });
    Meteor.publish('groupTest', function groupsPublication() {
        return GroupsTest.find({});
    });
    Meteor.publish('bills', function billsPublication() {
        return Bills.find({});
    });
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

    'notes.remove'(noteId) {
        Notes.remove(noteId);
    },

    'bills.insert'(type, amount, date, groupid) {
        Bills.insert({
            type: type,
            amount: amount,
            date: date,
            groupid: groupid,
        });
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

        GroupsTest.insert({
            name: groupName,
            members: [userid]
        });
    },
    'groupTest.update'(groupid, userid) {
        GroupsTest.update(
            { _id: groupid },
            { $push: { members: userid } }
        );
    },
});


