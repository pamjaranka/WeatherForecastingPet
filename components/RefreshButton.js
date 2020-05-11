import React from 'react';
import ButtonApp from './ButtonApp';
import {ICON_REFRESH} from '../constants/icons';
import PropTypes from 'prop-types';

RefreshButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

function RefreshButton(props) {
  return <ButtonApp iconName={ICON_REFRESH} onPress={props.onPress}/>;
}

export default RefreshButton;
