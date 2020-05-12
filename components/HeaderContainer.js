import React from 'react';
import {
  Body,
  Header,
  Title,
  Right,
  Icon,
  Left,
  Subtitle,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {FONTS, ICON_STYLES} from '../styles/base';
import PropTypes from 'prop-types';

export const buttonsPropTypes = {
  headerButtonFirst: PropTypes.element.isRequired,
  headerButtonSecond: PropTypes.element.isRequired,
};

HeaderContainer.propTypes = buttonsPropTypes;

function HeaderContainer(props) {
  console.log('HeaderContainer');
  const {headerButtonFirst, headerButtonSecond} = props;

  return (
    <Header noLeft transparent>
      <Left>
        <Icon type="FontAwesome5" name="paw" style={styles.icon} />
      </Left>
      <Body style={styles.body}>
        <Title style={styles.title}>WFP</Title>
        <Subtitle style={styles.subtitle}>Weather Forecasting Pet</Subtitle>
      </Body>
      <Right>
        {headerButtonFirst}
        {headerButtonSecond}
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 2,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.xs,
  },
  icon: ICON_STYLES,
});

export default HeaderContainer;
