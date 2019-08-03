import { withTracker } from 'meteor/react-meteor-data';
import MainDashboard from '../pages/MainDashboard';
import { GroupsTest } from '../../api/notes';

const MainContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    Meteor.subscribe('groupTest');
    return {
        currentUser,
        groups: GroupsTest.find().fetch(),
    };
})(MainDashboard);

export default MainContainer;