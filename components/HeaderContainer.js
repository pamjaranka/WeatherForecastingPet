import React from 'react';
import {
  Body,
  Header,
  Title,
  Right,
  Icon,
  Button,
  Left,
  Subtitle,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {FONTS, COLORS, PADDING} from '../styles/base';

function HeaderContainer() {
  return (
    <Header noLeft transparent>
      <Left>
        <Icon type="FontAwesome5" name="paw" style={styles.icon} />
      </Left>
      <Body>
        <Title style={styles.title}>WFP</Title>
        <Subtitle style={styles.subtitle}>Weather Forecasting Pet</Subtitle>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="search" style={styles.icon} />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.sm,
  },
  icon: {
    color: COLORS.blue,
    fontSize: 30,
    padding: PADDING.xs,
  },
});

export default HeaderContainer;
