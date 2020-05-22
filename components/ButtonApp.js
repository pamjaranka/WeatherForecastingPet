import React from 'react';
import {Button, Icon} from 'native-base';
import {ICON_STYLES} from '../styles/base';
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
    ...ICON_STYLES,
    width: 26,
  },
});

export default ButtonApp;
