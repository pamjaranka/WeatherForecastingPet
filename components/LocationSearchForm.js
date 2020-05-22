import React, {useState} from 'react';
import {Text, Form, Item, Input, Spinner, Label, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import {FONTS, COLORS, PADDING} from '../styles/base';
import {SEARCH_CITY_ERROR} from '../constants/erors';
import PropTypes from 'prop-types';

LocationSearchForm.propTypes = {
  onSearchFormSubmit: PropTypes.func.isRequired,
  isCityLoading: PropTypes.bool.isRequired,
  isCityError: PropTypes.bool.isRequired,
};

function LocationSearchForm(props) {
  const {onSearchFormSubmit, isCityLoading, isCityError} = props;
  const [query, setQuery] = useState('');
  // console.log('LocationSearchForm');
  // console.log(props);
  return (
    <Form>
      <Item error={isCityError} floatingLabel style={styles.input}>
        <Label>City Name</Label>
        <Input
          onChangeText={text => setQuery(text)}
          value={query}
        />
      </Item>
      {isCityError ? (
        <Text style={styles.error}>{SEARCH_CITY_ERROR}</Text>
      ) : <></>}
      <Button
        style={styles.button}
        onPress={() => {
          onSearchFormSubmit(query);
        }}>
        {isCityLoading ? (
          <Spinner color={COLORS.white} />
        ) : (
          <Text style={styles.buttonText}>Search</Text>
        )}
      </Button>
    </Form>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.blue,
    marginTop: PADDING.md,
  },
  buttonText: {
    fontFamily: FONTS.primary,
    textAlign: 'center',
  },
  input: {
    marginTop: PADDING.md,
    marginLeft: 0,
  },
  error: {
    color: COLORS.red,
    fontSize: FONTS.sm,
    fontFamily: FONTS.italic,
    marginTop: PADDING.xs,
  },
});

export default LocationSearchForm;
