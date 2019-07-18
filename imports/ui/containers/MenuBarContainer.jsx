import { withTracker } from 'meteor/react-meteor-data';
import MenuBar from '../components/MenuBar';

const MenuBarContainer = withTracker(({ onLogout }) => {
    const currentUser = Meteor.user();
    return {
        onLogout,
        currentUser
    };
})(MenuBar);

export default MenuBarContainer;