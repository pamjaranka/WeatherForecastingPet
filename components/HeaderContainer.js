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
import {FONTS} from '../styles/base';
import PropTypes from 'prop-types';

HeaderContainer.propTypes = {
  refreshButton: PropTypes.element.isRequired,
  searchButton: PropTypes.element.isRequired,
};

function HeaderContainer(props) {
  const {
    refreshButton,
    searchButton,
  } = props;
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
        {refreshButton}
        {searchButton}
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
});

export default HeaderContainer;
