import { withTracker } from 'meteor/react-meteor-data';
import ProfilePage from '../pages/ProfilePage';
import { Notes } from '../../api/notes';

const ProfileInfoContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    Meteor.subscribe('notes');
    return {
        currentUser,
        notes: Notes.find().fetch(),
    };
})(ProfilePage);

export default ProfileInfoContainer;