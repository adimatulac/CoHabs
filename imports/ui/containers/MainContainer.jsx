import { withTracker } from 'meteor/react-meteor-data';
import MainDashboard from '../pages/MainDashboard';
import { Groups } from '../../api/notes';

const MainContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    Meteor.subscribe('group');
    return {
        currentUser,
        groups: Groups.find().fetch(),
    };
})(MainDashboard);

export default MainContainer;