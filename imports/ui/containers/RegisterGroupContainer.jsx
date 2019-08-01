import { withTracker } from 'meteor/react-meteor-data';
import RegisterGroupPage from '../pages/RegisterGroupPage';
import { Groups } from '../../api/groups';
import { Meteor } from 'meteor/meteor';

const RegisterGroupContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    Meteor.subscribe('groups');
    // probably not the right way to do this
    return {
        currentUser,
        groups: Groups.find().fetch(),
    };
})(RegisterGroupPage);

export default RegisterGroupContainer;