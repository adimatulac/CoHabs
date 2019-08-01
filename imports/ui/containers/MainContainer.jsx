import { withTracker } from 'meteor/react-meteor-data';
import MainDashboard from '../pages/MainDashboard';
import { Groups } from '../../api/groups';

const MainContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    Meteor.subscribe('groups');
    return {
        currentUser,
        groups: Groups.find().fetch(),
    };
})(MainDashboard);

export default MainContainer;