import { withTracker } from 'meteor/react-meteor-data';
import NotesList from '../components/NotesList';
import Notes from '../../api/notes';

const NotesListContainer = withTracker(({ id }) => {
    const todosHandle = Meteor.subscribe('notes.public');
    return {
        onDelete: Notes.remove(id),
        notes: Notes.find().fetch(),
    };
})(NotesList);

export default NotesListContainer;