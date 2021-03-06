import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'

export const Notes = new Mongo.Collection('notesList');
export const Bills = new Mongo.Collection('billsList');
export const Groups = new Mongo.Collection('groupList');

if (Meteor.isServer) {
    //process.env.MAIL_URL="smtp://apikey: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@smtp.sendgrid.net:465/";
    // console.log("this is server");

    process.env.MAIL_URL = "smtps://cohabsinvite%40gmail.com:coHabs92@smtp.gmail.com:465/"
    Meteor.publish('notes', function notesPublication() {
        return Notes.find({
            date: {
                $gte: new Date()
            }
        }, { sort: { date: 1 } });
    });

    Meteor.publish('bills', function billsPublication() {
        return Bills.find({});
    });

    Meteor.publish('group', function groupsPublication() {
        return Groups.find({});
    });

    Meteor.publish('users', function usersPublication() {
        return Meteor.users.find({});
    });

}

Meteor.methods({
    'user.update'(userId, fname, lname, phone, email) {
        Meteor.users.update(userId, {
            $set: {
                'profile.fname': fname,
                'profile.lname': lname,
                'profile.phone': phone,
                'profile.email': email
            }
        });
    },

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

    'notes.remove'(noteId) {
        Notes.remove(noteId);
    },

    'notes.addHelper'(noteId, user) {
        Notes.update({ _id: noteId }, {
            $push: {
                helpers: user
            }
        });
    },

    'notes.removeHelper'(noteId, user) {
        console.log('trying to pull from ' + noteId);
        Notes.update({ _id: noteId }, {
            $pull: {
                helpers: { _id: user._id }
            }
        });
    },

    'notes.addInterested'(noteId, user) {
        Notes.update({ _id: noteId }, {
            $push: {
                interested: user
            }
        });
    },

    'notes.removeInterested'(noteId, user) {
        console.log('trying to pull from ' + noteId);
        Notes.update({ _id: noteId }, {
            $pull: {
                interested: { _id: user._id }
            }
        });
    },

    'notes.addGoing'(noteId, user) {
        Notes.update({ _id: noteId }, {
            $push: {
                going: user
            }
        });
    },

    'notes.removeGoing'(noteId, user) {
        console.log('trying to pull from ' + noteId);
        Notes.update({ _id: noteId }, {
            $pull: {
                going: { _id: user._id }
            }
        });
    },

    'bills.insertupdate'(type, amount, date, groupid) {
        console.log('wowowowoo' + Bills.find({ $and: [{ type: type }, { groupid: groupid }] }));
        if (Bills.find({ $and: [{ type: type }, { groupid: groupid }] }).fetch().length === 0) {
            Bills.insert({
                type: type,
                amount: amount,
                date: date,
                groupid: groupid,
                unpaidMembers: Groups.find({ _id: Meteor.user().profile.group }).fetch()[0].members,
                paidMembers: [],
            });
        } else {
            Bills.update({ type: type, groupid: groupid }, {
                $set: {
                    amount: amount,
                    date: date,
                    unpaidMembers: Groups.find({ _id: Meteor.user().profile.group }).fetch()[0].members,
                    paidMembers: [],
                },
            });
        }
    },

    'bills.updatePaidMember'(type, groupid, userId) {
        Bills.update({ type: type, groupid: groupid }, {
            $push: { paidMembers: userId },
            $pull: { unpaidMembers: userId }
        });
    },

    'notes.edit'(noteId) {
        Notes.update({ _id: noteId }, {

        });
    },

    'groups.insert'(groupName, userid) {

        console.log('group name: ' + groupName);
        if (!userid) {
            throw new Meteor.Error('not-authorized');
        }

        var groupID = Groups.insert({
            name: groupName,
            members: [userid]
        }, function (err, mongoID) {
            return mongoID;
        });

        Meteor.users.update({ _id: userid }, {
            $set: {
                'profile.group': groupID
            }
        });

        console.log('group id from server: ' + groupID);
    },

    'groups.update'(groupid, userid) {
        Groups.update(
            { _id: groupid },
            { $push: { members: userid } }
        );

        Meteor.users.update({ _id: userid }, {
            $set: {
                'profile.group': groupid
            }
        });
    },
    
    'sendEmail'(to, from, subject, text) {
        // Make sure that all arguments are strings.
        // check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running, without
        // waiting for the email sending to complete.
        this.unblock();

        Email.send({ to, from, subject, text });
    }
});


