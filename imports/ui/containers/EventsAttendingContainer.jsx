import { withTracker } from 'meteor/react-meteor-data';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
import EventsAttendingBoard from '../components/EventsAttendingBoard';

const EventsAttendingContainer = withTracker(({ params }) => {
    Meteor.subscribe('notes');
    return {
        notes: Notes.find({username: Meteor.user().username}).fetch(),
        eventsAttending: Notes.find({going: { $elemMatch: { _id: Meteor.user()._id } }}).fetch()
    };
})(EventsAttendingBoard);

export default EventsAttendingContainer;