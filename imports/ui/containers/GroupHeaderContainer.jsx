import { withTracker } from 'meteor/react-meteor-data';
import { Groups } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
import GroupBoardHeader from '../components/GroupBoardHeader';


const GroupHeaderContainer = withTracker(({ params }) => {
    Meteor.subscribe('group');
    return {
        groups: Groups.find({_id: Meteor.user().profile.group}).fetch(),
    };
})(GroupBoardHeader);

export default GroupHeaderContainer;