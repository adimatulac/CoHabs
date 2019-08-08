import { withTracker } from 'meteor/react-meteor-data';
import PieChart from '../components/Pie Chart with Customization';
import BillsBoard from '../components/BillsBoard';
import { Bills } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
import { Groups } from '../../api/notes';


const BillsContainer = withTracker(({ id }) => {
    Meteor.subscribe('bills');
    Meteor.subscribe('group');
    Meteor.subscribe('users');


    return {
        bills: Bills.find({ groupid: Meteor.user().profile.group }).fetch(),
        groups: Groups.find({ _id: Meteor.user().profile.group }).fetch(),
    };
})(PieChart);

export default BillsContainer;