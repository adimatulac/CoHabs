import { withTracker } from 'meteor/react-meteor-data';
import GroupList from '../components/GroupList';
import { Groups } from '../../api/notes';
import { Meteor } from 'meteor/meteor';

const GroupContainer = withTracker(({ params }) => {
    // const currentUser = Meteor.user();
    Meteor.subscribe('group');
    console.log("this line is running?");
    console.log(Groups.find().fetch());
    return {
        currentUser,
        groups: Groups.find().fetch(),
    };
})(GroupList);

export default GroupContainer;