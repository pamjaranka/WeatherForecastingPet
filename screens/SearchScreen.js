import React from 'react';
import {StyleSheet} from 'react-native';
import {Content} from 'native-base';
import {COLORS, PADDING} from '../styles/base';
import LocationSearchForm from '../components/LocationSearchForm';

function SearchScreen({navigation, route}) {
  console.log('SearchScreen');
  const {isCityError, onSearchFormSubmit} = route.params;

  return (
    <Content style={styles.container}>
      <LocationSearchForm isCityError={isCityError} onSearchFormSubmit={onSearchFormSubmit} />
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingLeft: PADDING.md,
    paddingRight: PADDING.md,
  },
});

export default SearchScreen;
