import React from 'react';
import {Footer, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {FONTS, COLORS, PADDING} from '../styles/base';
import PropTypes from 'prop-types';

FooterContainer.propTypes = {
  phrase: PropTypes.string.isRequired,
};

function FooterContainer(props) {
  return (
    <Footer style={styles.footer}>
      <Text style={styles.title}>{props.phrase}</Text>
    </Footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: COLORS.lightGrey,
    borderTopWidth: 0,
    padding: PADDING.sm,
  },
  title: {
    fontFamily: FONTS.italic,
    fontSize: FONTS.lg,
    color: COLORS.grey,
  },
});

export default FooterContainer;
