import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/ClearRounded';
import Container from 'react-bootstrap/Container';
import IconButton from '@material-ui/core/IconButton';
import Notes from '../api/notes';
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

export default ({ note: { id, message, type, date, _id }, onDelete }) => {

    const classes = useStyles();

    return (
        <Card className="h-100" style={{ width: '16rem', position: 'relative' }}>
            <IconButton style={{ position: 'absolute', top: '0', right: '0' }}>
                        <ClearIcon button className={classes.iconHover} color="error" onClick={() => onDelete(_id)}/>
                    </IconButton>
            <Card.Body style={{ textAlign: 'left' }}>
                <Card.Title>
                    <h5>{ message }</h5>
                </Card.Title>
                <Card.Text style={{ textAlign: 'left', paddingBottom: '20px' }}>
                    <h6 className="card-title">type: <span className="p-unbolded">{ type }</span></h6>
                    <h6 className="card-title">date: <span className="p-unbolded">{ date }</span></h6>
                </Card.Text>
                {/* <Container style={{ position: 'absolute', bottom: '0', right: '0', paddingTop: '10px', paddingBottom: '10px' }}>
                    <IconButton>
                        <ClearIcon button className={classes.iconHover} color="error" onClick={() => onDelete(id)}/>
                    </IconButton>
                </Container> */}
                {/* <Button variant="contained" color="primary" onClick={() => onDelete(id)}>delete</Button> */}
            </Card.Body>
            <Card.Footer style={{ textAlign: 'right' }}>
                <small className="text-muted">Jessica</small>
            </Card.Footer>
        </Card>
    );
};