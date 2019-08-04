import { withTracker } from 'meteor/react-meteor-data';
import NotesList from '../components/NotesList';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';


const NotesListContainer = withTracker(({ id }) => {
    
    Meteor.subscribe('notes');
    console.log('user.profile.group: ' + Meteor.user().profile.group);
    return {
        notes: Notes.find({group: Meteor.user().profile.group}).fetch(),
    };
})(NotesList);

export default NotesListContainer;