import React from 'react';
import ButtonApp from './ButtonApp';
import {ICON_SEARCH} from '../constants/icons';
import PropTypes from 'prop-types';

SearchButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

function SearchButton(props) {
  return <ButtonApp iconName={ICON_SEARCH} onPress={props.onPress} />;
}

export default SearchButton;
