import React from 'react';
import {Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

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
    <View>
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

export default LocationData;
