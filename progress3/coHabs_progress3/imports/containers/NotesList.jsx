import React from 'react';
import Note from '../ui/Note';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from 'react-bootstrap/Card';
import Fab from '@material-ui/core/Fab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notes from '../api/notes';
import { withTracker } from 'meteor/react-meteor-data';

class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showDialog: false
        }
    }

    handleClose() {
        this.setState({ show: false });
    };

    handleShow() {
        console.log('button works!');
        this.setState({ show: true });
    };
    onDelete = (id) => {
        Notes.remove(id);
    };

    render() {
        console.log(this.props);
        console.log('rendering list ...');

        if (this.props.notes.length === 0) {
            return (
                <div className="card text-white bg-danger mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Whoah!</h5>
                        <p className="card-text">No notes in records.</p>
                    </div>
                </div>
            )
        } else {
            return (
                <Container style={{ position: 'relative' }}>
                    <Row>
                        <Container className="mb-4" style={{ textAlign: "left" }}>
                            <h4>
                                Bulletin Board
                            </h4>   
                        </Container>
                    </Row>
                    <Row>
                        {this.props.notes.map(note => {
                            return (
                                <Col md="auto" className="px-2 mb-3" key={ note.id }>
                                    <Note note={ note } onDelete={ this.onDelete } />
                                </Col>
                            );
                        })}
                        <Col md="auto" className="px-2 mb-3">
                            <Card className="h-100 bg-light" style={{ width: '16rem', position: 'relative', textAlign: "center" }}>
                                <Button>
                                    <AddIcon style={{ margin: 'auto' }}/>
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default InfoContainer = withTracker(() => {
    const todosHandle = Meteor.subscribe('notes.public');
    return {
      notes: Notes.find().fetch(),
    };
  })(NotesList);