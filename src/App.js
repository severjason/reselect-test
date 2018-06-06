// @flow
import React from 'react';
import { List, SelectedList, Basket } from 'containers';
import { Container, Header } from 'semantic-ui-react';

const App = () => (
      <Container >
        <Basket/>
        <Header as='h2' textAlign='center'>Reselect test</Header>
        <SelectedList/>
        <List/>
      </Container>
    );

export default App;
