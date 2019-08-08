import { withTracker } from 'meteor/react-meteor-data';
import NotesList from '../components/NotesList';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';


const NotesListContainer = withTracker(({ id }) => {
    
    Meteor.subscribe('notes');
    return {
        notes: Notes.find({group: Meteor.user().profile.group}).fetch(),
    };
})(NotesList);

export default NotesListContainer;