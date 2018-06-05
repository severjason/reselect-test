// @flow
import React from 'react';
import { List, SelectedList } from 'containers';
import { Container, Header } from 'semantic-ui-react';

const App = () => (
      <Container >
        <Header as='h2' textAlign='center'>Reselect test</Header>
        <SelectedList/>
        <List/>
      </Container>
    );

export default App;
