import { withTracker } from 'meteor/react-meteor-data';
import Notes from '../../api/notes';
import Note from '../components/Note';

const NoteContainer = withTracker(({ id }) => {
    const note = Notes.findOne(id);

    return {
        onDelete: Notes.remove(id),
        note
    }
})(Note);

export default NoteContainer;