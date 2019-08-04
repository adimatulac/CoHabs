import { withTracker } from 'meteor/react-meteor-data';
import PieChart from './Pie Chart';
import { Bills } from '../../api/notes';
import { Meteor } from 'meteor/meteor';


const BillsContainer = withTracker(({ id }) => {

    Meteor.subscribe('bills');
    return {
        bills: Bills.find().fetch(),
    };
})(PieChart);

export default BillsContainer;