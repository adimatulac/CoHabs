import { withTracker } from 'meteor/react-meteor-data';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
import AcceptedRequestsBoard from '../components/AcceptedRequestsBoard';

const AcceptedRequestsContainer = withTracker(({ params }) => {
    Meteor.subscribe('notes');
    return {
        notes: Notes.find({username: Meteor.user().username}).fetch(),
        acceptedNotes: Notes.find({helpers: { $elemMatch: { _id: Meteor.user()._id } }}).fetch()
    };
})(AcceptedRequestsBoard);

export default AcceptedRequestsContainer;