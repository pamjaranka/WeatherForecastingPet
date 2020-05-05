import React from 'react';
import HeaderContainer from './HeaderContainer';
import Location from './Location';
import {Container} from 'native-base';

function StartScreen(props) {
  return (
    <Container>
      <HeaderContainer />
      <Location />
    </Container>
  );
}

export default StartScreen;
