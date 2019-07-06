import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import Notes from '../api/notes';

class FormDialog extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      open: false,
      message: '',
      type: '',
      date: '',
      username: ''
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  }

  handleClose = () => {
    this.handleClear();
    this.setState({
      open: false
    });
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
        username: Meteor.user().username
    });
  };

  handleClear = () => {
    this.setState({
        message: '',
        type: '',
        date: ''
    });
  };

  handleDateChange = (date) => {
    this.setState({
        date: date
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.message.trim() && this.state.type.trim()) {
        console.log('listing props in input form:');
        console.log(this.props);
        console.log('adding note ...')
        console.log(this.state);
        console.log(Meteor.user().username);
        Notes.insert(this.state);
        // this.props.onAddNote(this.state);
        this.handleClose();
    }
  };

  render() {
    return (
      <div style={{ height: '100%' }} className="text-right">
        <IconButton onClick={ this.handleClickOpen }>
          <AddIcon />
        </IconButton>
        <Dialog open={ this.state.open } onClose={ this.handleClose } aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a Note</DialogTitle>
          <DialogContent>
              <form style={{ display: 'flex', flexWrap: 'wrap' }} onSubmit={ this.handleSubmit }>
                <FormControl style={{ width: '100%' }}>
                  <TextField
                    id="outlined-name"
                    label="message"
                    fullWidth={ true }
                    name="message"
                    value={ this.state.message }
                    onChange={ this.handleChange }
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl style={{ width: '100%' }}>
                  <TextField
                    id="outlined-select"
                    select
                    label="type"
                    name="type"
                    value={ this.state.type }
                    onChange={ this.handleChange }
                    margin="normal"
                    variant="outlined"
                  >
                    <MenuItem key={ 'none' } value={ '' }>none</MenuItem>
                    <MenuItem key={ 'event' } value={ 'event' }>event</MenuItem>
                    <MenuItem key={ 'chore' } value={ 'chore' }>chore</MenuItem>
                    <MenuItem key={ 'household maintenance' } value={ 'household maintenance' }>household maintenance</MenuItem>
                    <MenuItem key={ 'personal' } value={ 'personal' }>personal</MenuItem>
                  </TextField>
                </FormControl>
                <FormControl style={{ width: '100%' }}>
                  <TextField
                    id="outlined-name"
                    label="date"
                    fullWidth={ true }
                    name="date"
                    value={ this.state.date }
                    onChange={ this.handleChange }
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
                {/* <FormControl style={{ width: '100%' }} className="mt-3">
                  <DatePicker
                  selected={ this.state.date }
                  onChange={ this.handleDateChange }
                  showTimeSelect
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="Time"
                  className="dateinput"
                  />
                </FormControl> */}
              </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.handleClose } color="primary">
              Cancel
            </Button>
            <Button onClick={ this.handleSubmit } color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;