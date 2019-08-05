import { withTracker } from 'meteor/react-meteor-data';
import RegisterGroupPage from '../pages/RegisterGroupPage';
// import { Groups } from '../../api/groups';
import { Groups } from '../../api/notes';
import { Meteor } from 'meteor/meteor';

const RegisterGroupContainer = withTracker(({ params }) => {
    const currentUser = Meteor.user();
    Meteor.subscribe('group');
    // Meteor.subscribe('users');
    console.log("this is group")
    console.log(Groups.find().fetch());
    return {
        currentUser,
        groups: Groups.find().fetch(),
    };
})(RegisterGroupPage);

export default RegisterGroupContainer;