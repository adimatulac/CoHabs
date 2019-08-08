import { withTracker } from 'meteor/react-meteor-data';
import PieChart from '../components/Pie Chart';
import BillsBoard from '../components/BillsBoard';
import { Bills } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
import { Group } from '../../api/notes';


const BillsContainer = withTracker(({ id }) => {
    Meteor.subscribe('bills');
    // Meteor.subscribe('group');

    return {
        bills: Bills.find({}).fetch(),

        // groups: Groups.find({ _id: Meteor.user().profile.group }).fetch(),
    };
})(PieChart);

export default BillsContainer;