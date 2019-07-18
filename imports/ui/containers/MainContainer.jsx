import { withTracker } from 'meteor/react-meteor-data';
import MainDashboard from '../pages/MainDashboard';

const MainContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    return {
        currentUser
    };
})(MainDashboard);

export default MainContainer;