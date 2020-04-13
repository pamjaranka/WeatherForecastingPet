import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import PropTypes from 'prop-types';

LocationSearch.propTypes = {
  locationCity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function LocationSearch(props) {
  const {locationCity, onChange} = props;
  const [query, setQuery] = useState(locationCity);
  console.log('LocationSearch');
  return (
    <View>
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

export default LocationSearch;
