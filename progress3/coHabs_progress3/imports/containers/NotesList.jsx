import React from 'react';
import Note from '../ui/Note';
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
                <div className="card text-white bg-light mb-3">
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: '#808080' }}>Whoah!</h5>
                        <p className="card-text" style={{ color: '#808080' }}>No notes in records.</p>
                    </div>
                </div>
            )
        } else {
            return (
                <Container style={{ position: 'relative' }}>
                    <Row>
                        {this.props.notes.map(note => {
                            return (
                                <Col md="auto" className="px-2 mb-3" key={ note._id }>
                                    <Note note={ note } onDelete={ this.onDelete } />
                                </Col>
                            );
                        })}
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