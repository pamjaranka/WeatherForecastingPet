import React from 'react';
import ButtonApp from './ButtonApp';
import {ICON_CLOSE} from '../constants/icons';
import PropTypes from 'prop-types';

CloseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

function CloseButton(props) {
  return <ButtonApp iconName={ICON_CLOSE} onPress={props.onPress} />;
}

export default CloseButton;
