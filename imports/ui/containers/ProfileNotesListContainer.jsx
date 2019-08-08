import { withTracker } from 'meteor/react-meteor-data';
import NotesList from '../components/NotesList';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';


const ProfileNotesListContainer = withTracker(({ id }) => {
    
    Meteor.subscribe('notes');
    // console.log('user.profile.group: ' + Meteor.user().profile.group);
    return {
        notes: Notes.find({username: Meteor.user().username}).fetch(),
    };
})(NotesList);

export default ProfileNotesListContainer;