import { withTracker } from 'meteor/react-meteor-data';
import GroupList from '../components/GroupList';
import { Groups } from '../../api/notes';
import { Meteor } from 'meteor/meteor';

const GroupContainer = withTracker(({ params }) => {
    Meteor.subscribe('group');
    return {
        groups: Groups.find({_id: Meteor.user().profile.group}).fetch(),
    };
})(GroupList);

export default GroupContainer;