import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormDialog from '../ui/FormDialog';

class BulletinHeader extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Container className="mb-4" style={{ textAlign: "left" }}>
                        <h4 className="page-title">
                            Bulletin Board
                        </h4>   
                    </Container>
                </Col>
                <Col>
                    <FormDialog />
                </Col>
            </Row>
        );
    }
}

export default BulletinHeader;