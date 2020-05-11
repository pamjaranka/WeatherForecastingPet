import React from 'react';
import {Button, Icon} from 'native-base';
import {COLORS} from '../styles/base';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

ButtonApp.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

function ButtonApp(props) {
  const {iconName, onPress} = props;

  return (
    <Button transparent onPress={onPress}>
      <Icon name={iconName} style={styles.icon} />
    </Button>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: COLORS.blue,
    fontSize: 30,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 26,
  },
});

export default ButtonApp;
