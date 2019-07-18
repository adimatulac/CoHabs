import { withTracker } from 'meteor/react-meteor-data';
import Notes from '../../api/notes';
import NoteCardModal from '../components/NoteCardModal';

const NoteCardContainer = withTracker(({ id }) => {

    return {
        onDelete: Notes.remove(id),
        note: Notes.findOne(id)
    }
})(NoteCardModal);

export default NoteCardContainer;