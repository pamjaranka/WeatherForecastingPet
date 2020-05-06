import React from 'react';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import Location from './Location';
import {Container, Content} from 'native-base';

function StartScreen(props) {
  return (
    <Container>
      <HeaderContainer />
      <Content>
        <Location />
      </Content>
      <FooterContainer />
    </Container>
  );
}

export default StartScreen;
