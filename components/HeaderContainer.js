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
import {ICON_CLOSE, ICON_SEARCH} from '../constants/icons';
import PropTypes from 'prop-types';

HeaderContainer.propTypes = {
  iconName: PropTypes.oneOf([ICON_CLOSE, ICON_SEARCH]).isRequired,
  onSearchButtonPress: PropTypes.func.isRequired,
};

function HeaderContainer(props) {
  const {iconName, onSearchButtonPress} = props;
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
        <Button transparent onPress={onSearchButtonPress}>
          <Icon name={iconName} style={styles.icon} />
        </Button>
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
  icon: {
    color: COLORS.blue,
    fontSize: 30,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default HeaderContainer;
