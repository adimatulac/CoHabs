import React from 'react';
import { Container } from 'semantic-ui-react';
import BillsBoardHeader from './BillsBoardHeader';
import PieChart from './Pie Chart';

export default class BillsBoard extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <BillsBoardHeader />
                <PieChart />

            </Container>
        );
    }
}