import { connect } from 'react-redux';
import { addNote } from '../actions';
import InputForm from '../ui/InputForm';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNote: (note) => {
            dispatch(addNote(note));
        }
    };
};

export default connect(null, mapDispatchToProps)(InputForm);