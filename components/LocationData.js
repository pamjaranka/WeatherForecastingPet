import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {PADDING} from '../styles/base';

LocationData.propTypes = {
  locationCity: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

function LocationData(props) {
  const {
    locationCity,
    onUpdate,
  } = props;
  console.log('LocationData')

  return (
    <View style={styles.container}>
      <Text>Your current city is {locationCity}.</Text>
      <Button
        onPress={() => {
          console.log(`Update`);
          onUpdate(true);
        }}
        title="Update"
        color="#841584"
        accessibilityLabel="Update your current location"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING.md,
  },
});

export default LocationData;
