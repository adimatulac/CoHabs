import React from 'react';
import { Container } from 'semantic-ui-react';
import BillsBoardHeader from './BillsBoardHeader';
import BillsContainer from '../containers/BillsContainer';

export default class BillsBoard extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <BillsBoardHeader />
                <BillsContainer type={'rent'} />
                <BillsContainer type={'utilities'} />
                <BillsContainer type={'internet'} />

            </Container>
        );
    }
}