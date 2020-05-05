import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {PADDING} from '../styles/base';

LocationSearch.propTypes = {
  locationCity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function LocationSearch(props) {
  const {locationCity, onChange} = props;
  const [query, setQuery] = useState(locationCity);
  console.log('LocationSearch');
  // console.log(query);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setQuery(text)}
        value={query}
      />
      <Button
        onPress={() => {
          console.log(`press ${locationCity}`);
          onChange(query);
        }}
        title="Search"
        color="#841584"
        accessibilityLabel="Find your city"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING.md,
  },
});

export default LocationSearch;
