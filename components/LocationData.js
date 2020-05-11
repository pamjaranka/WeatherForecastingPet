import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {H1} from 'native-base';
import PropTypes from 'prop-types';
import {FONTS, PADDING, COLORS} from '../styles/base';

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
      <Text style={styles.title}>{locationCity}</Text>
      <Text style={styles.subtitle}>(the city)</Text>
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
    paddingTop: PADDING.lg,
  },
  titleContainer: {
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 4,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: FONTS.lg,
  },
  subtitle: {
    color: COLORS.grey,
    fontSize: FONTS.sm,
  },
});

export default LocationData;
