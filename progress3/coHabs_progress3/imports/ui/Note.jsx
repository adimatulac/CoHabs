import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from 'react-bootstrap/Card';
import ClearIcon from '@material-ui/icons/ClearRounded';
import IconButton from '@material-ui/core/IconButton';
import { Meteor } from 'meteor/meteor';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing(2),
    },
    iconHover: {
      '&:hover': {
        color: red[800],
      },
    },
  }));

export default ({ note: { id, message, type, date, _id, username }, onDelete }) => {

    const classes = useStyles();

    return (
        <Card className="h-100" style={{ width: '14rem', position: 'relative' }}>
          { Meteor.user().username === username ? 
            <IconButton style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'transparent' }} onClick={() => onDelete(_id)}>
                        <ClearIcon className={classes.iconHover} color="error"/>
                    </IconButton> : console.log('not user') }
                    <Card.Body style={{ textAlign: 'left', paddingBottom: '20px' }}>
                <Card.Title>
                    <h6 className="note-title">{ message }</h6>
                </Card.Title>
                <p className="card-title">type: <span className="p-unbolded">{ type }</span></p>
                <p className="card-title">date: <span className="p-unbolded">{ date }</span></p>
            </Card.Body>
            <Card.Footer style={{ textAlign: 'right' }}>
                <small className="text-muted">{ username }</small>
            </Card.Footer>
        </Card>
    );
};