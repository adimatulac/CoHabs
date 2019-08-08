import React from 'react';
import { Container, Grid, Label, Button } from 'semantic-ui-react';
import EditBillDialog from './EditBillDialog';
import PaidDialog from './PaidDialog';


export default class BillsBoardHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                        <h2 style={{ color: '#4D4D4D' }}>Bills</h2>
                    </Grid.Column>
                    <Grid.Column textAlign='right' style={{ paddingBottom: '0' }}>
                        <Button.Group basic>
                            <EditBillDialog />
                            <PaidDialog />
                        </Button.Group>
                    </Grid.Column>

                    <Grid.Column textAlign='left' style={{ paddingTop: '0' }}>
                        {/* <Label color='teal'>Chingooz</Label> */}
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}