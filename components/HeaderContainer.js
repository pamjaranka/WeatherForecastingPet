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
import CloseButton from './CloseButton';
import RefreshButton from './RefreshButton';
import SearchButton from './SearchButton';
import {FONTS, COLORS} from '../styles/base';
import PropTypes from 'prop-types';

HeaderContainer.propTypes = {
  onCloseButtonPress: PropTypes.func.isRequired,
  onSearchButtonPress: PropTypes.func.isRequired,
  onRefreshButtonPress: PropTypes.func.isRequired,
  showLocationSearchForm: PropTypes.bool.isRequired,
};

function HeaderContainer(props) {
  const {
    onCloseButtonPress,
    onRefreshButtonPress,
    onSearchButtonPress,
    showLocationSearchForm,
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
        <RefreshButton onPress={onRefreshButtonPress} />
        {showLocationSearchForm ? (
          <CloseButton onPress={onCloseButtonPress} />
        ) : (
          <SearchButton onPress={onSearchButtonPress} />
        )}
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
