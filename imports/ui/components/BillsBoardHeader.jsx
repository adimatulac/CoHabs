import React from 'react';
import { Container, Grid, Label, Button } from 'semantic-ui-react';
import EditBillDialog from './EditBillDialog';
import PaidDialog from './PaidDialog';


export default class BillsBoardHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns='equal'>
                    <Grid.Column width={10} textAlign='left' style={{ paddingBottom: '0' }}>
                        <h2 style={{ color: '#4D4D4D' }}>Bills</h2>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign='right' style={{ paddingBottom: '0' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <EditBillDialog />
                            <PaidDialog />
                        </div>
                    </Grid.Column>

                    <Grid.Column textAlign='left' style={{ paddingTop: '0', marginBottom: '14px' }}>
                        {/* <Label color='teal'>Chingooz</Label> */}
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}