// import { withTracker } from 'meteor/react-meteor-data';
// import GroupList from '../components/GroupList';
// import { Groups } from '../../api/notes';
// import { Meteor } from 'meteor/meteor';


// const GroupListContainer = withTracker(({ params }) => {
//     const currentUser = Meteor.user();
//     Meteor.subscribe('group');
//     console.log("hello")
//     // Meteor.subscribe('users');
//     return {
//         currentUser,
//         groups: Groups.find().fetch(),
//     };
// })(GroupList);

// export default GroupListContainer;