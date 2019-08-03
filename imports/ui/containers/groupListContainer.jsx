import { withTracker } from 'meteor/react-meteor-data';
import GroupList from '../components/GroupList';
import { Groups } from '../../api/notes';
import { Meteor } from 'meteor/meteor';


const GroupListContainer = withTracker(({ id }) => {
    
    Meteor.subscribe('groups');
    return {
        // TODO: // find filter
        notes: Groups.find().fetch({_id: Meteor.user().profile.group}),
    };
})(GroupList);

export default GroupListContainer;